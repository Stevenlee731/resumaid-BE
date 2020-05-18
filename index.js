require("dotenv").config();

const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { validation } = require("@keystonejs/app-graphql");

//modules
const ModuleList = require("./models/modules/ModuleList.js");

//awards
const Award = require("./models/modules/Award.js");
const AwardItem = require("./models/modules/AwardItem.js");

//basics
const Basic = require("./models/modules/Basic.js");
const Location = require("./models/modules/Location.js");
const SocialProfile = require("./models/modules/SocialProfile.js");

//education
const Education = require("./models/modules/Education.js");
const EducationItem = require("./models/modules/EducationItem.js");

//interests
const Interest = require("./models/modules/Interest");
const InterestItem = require("./models/modules/InterestItem.js");

//skills
const Skill = require("./models/modules/Skill.js");
const SkillItem = require("./models/modules/SkillItem.js");
const Keyword = require("./models/modules/Keyword.js");

//work
const Work = require("./models/modules/Work.js");
const WorkItem = require("./models/modules/WorkItem.js");
const Highlight = require("./models/modules/Highlight.js");

//references
const Reference = require("./models/modules/Reference.js");
const ReferenceItem = require("./models/modules/ReferenceItem.js");

const initialiseData = require("./initial-data");
const User = require("./models/User.js");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

const PROJECT_NAME = "resumaid-BE";
const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
};

const cookieSecret = "7d0f1a11-ed7b-47a4-9929-551ac2ed3fbb";

const keystone = new Keystone({
  cookieSecret,
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList("User", User);
keystone.createList("ModuleList", ModuleList);
keystone.createList("Keyword", Keyword);
keystone.createList("Highlight", Highlight);
keystone.createList("AwardItem", AwardItem);
keystone.createList("Award", Award);
keystone.createList("Basic", Basic);
keystone.createList("Location", Location);
keystone.createList("SocialProfile", SocialProfile);
keystone.createList("SkillItem", SkillItem);
keystone.createList("Skill", Skill);
keystone.createList("ReferenceItem", ReferenceItem);
keystone.createList("Reference", Reference);
keystone.createList("InterestItem", InterestItem);
keystone.createList("Interest", Interest);
keystone.createList("EducationItem", EducationItem);
keystone.createList("Education", Education);
keystone.createList("WorkItem", WorkItem);
keystone.createList("Work", Work);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
});

const apps = [
  new GraphQLApp(),
  new AdminUIApp({
    enableDefaultRoute: true,
    // authStrategy,
  }),
];

const configureExpress = (app) => {
  app.set("trust proxy", 1);
};

module.exports = { keystone, apps, configureExpress };
