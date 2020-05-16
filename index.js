require("dotenv").config();

const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");

const {
  BasicSchema,
  LocationSchema,
  SocialProfileSchema,
  SkillItemSchema,
  SkillSchema,
  ReferenceItemSchema,
  ReferenceSchema,
  AwardItemSchema,
  AwardSchema,
  InterestItemSchema,
  InterestSchema,
  EducationItemSchema,
  EducationSchema,
  WorkItemSchema,
  WorkSchema,
  ModuleList,
  KeywordSchema,
  HighlightSchema,
} = require("./models/index");

const initialiseData = require("./initial-data");
const UserSchema = require("./models/User.js");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

console.log(process.env.DATABASE_URL);
const PROJECT_NAME = "resumaid-BE";
const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
};

const keystone = new Keystone({
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

keystone.createList("User", UserSchema);
keystone.createList("ModuleList", ModuleList);
keystone.createList("Keyword", KeywordSchema);
keystone.createList("Highlight", HighlightSchema);
keystone.createList("AwardItem", AwardItemSchema);
keystone.createList("Award", AwardSchema);
keystone.createList("Basic", BasicSchema);
keystone.createList("Location", LocationSchema);
keystone.createList("SocialProfile", SocialProfileSchema);
keystone.createList("SkillItem", SkillItemSchema);
keystone.createList("Skill", SkillSchema);
keystone.createList("ReferenceItem", ReferenceItemSchema);
keystone.createList("Reference", ReferenceSchema);
keystone.createList("InterestItem", InterestItemSchema);
keystone.createList("Interest", InterestSchema);
keystone.createList("EducationItem", EducationItemSchema);
keystone.createList("Education", EducationSchema);
keystone.createList("WorkItem", WorkItemSchema);
keystone.createList("Work", WorkSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
});

const findUser = async (parent, { name }, ctx, info, { query }) => {
  const { data, error } = await query(
    `
  allUsers(where: { username: ${name} }) {
    basics {
      name
      label
      image
      email
      summary
      website
      profiles {
        username
        network
      }
      location {
        city
        countryCode
      }
    }
    modules {
      education {
        module
        slot
        order
        content {
          endDate
          startDate
          area
          studyType
          institution
        }
      }
      references {
        module
        slot
        order
        content {
          reference
          name
        }
      }
      skills {
        module
        order
        slot
        content {
          keywords {
            keyword
          }
          level
          name
        }
      }
      awards {
        order
        slot
        content {
          title
          awarder
        }
      }
      work {
        module
        order
        slot
        content {
          summary
          website
          company
          pinned
          location
          position
          startDate
          highlights {
            highlight
          }
        }
      }
      interests {
        slot
        order
        module
        content {
          name
        }
      }
    }
  }
  `,
    { variables: name }
  );

  return data;
};

keystone.extendGraphQLSchema({
  queries: [
    {
      schema: "findUser(name: String): User",
      resolver: findUser,
    },
  ],
});

const apps = [
  new GraphQLApp(),
  new AdminUIApp({
    enableDefaultRoute: true,
  }),
];

const configureExpress = (app) => {
  app.set("trust proxy", 1);
};

module.exports = { keystone, apps, configureExpress };
