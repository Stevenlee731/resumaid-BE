const UserSchema = require("./User");

//modules
const ModuleList = require("./modules/ModuleList");
const Module = require("./modules/Module");

//awards
const AwardSchema = require("./modules/Awards/Award");
const AwardItemSchema = require("./modules/Awards/AwardItem");

//basics
const BasicSchema = require("./modules/Basics/Basic");
const LocationSchema = require("./modules/Basics/Location");
const SocialProfileSchema = require("./modules/Basics/SocialProfile");

//education
const EducationSchema = require("./modules/Education/Education");
const EducationItemSchema = require("./modules/Education/EducationItem");

//interests
const InterestSchema = require("./modules/Interests/Interest");
const InterestItemSchema = require("./modules/Interests/InterestItem");

//skills
const SkillSchema = require("./modules/Skills/Skill");
const SkillItemSchema = require("./modules/Skills/SkillItem");
const KeywordSchema = require("./modules/Skills/Keyword");

//work
const WorkSchema = require("./modules/Work/Work");
const WorkItemSchema = require("./modules/Work/WorkItem");
const HighlightSchema = require("./modules/Work/Highlight");

//references
const ReferenceSchema = require("./modules/References/Reference");
const ReferenceItemSchema = require("./modules/References/ReferenceItem");

module.exports = {
  ReferenceSchema,
  ReferenceItemSchema,
  UserSchema,
  ModuleList,
  Module,
  AwardSchema,
  AwardItemSchema,
  BasicSchema,
  LocationSchema,
  SocialProfileSchema,
  EducationSchema,
  EducationItemSchema,
  InterestSchema,
  InterestItemSchema,
  SkillSchema,
  SkillItemSchema,
  WorkSchema,
  WorkItemSchema,
  HighlightSchema,
  KeywordSchema,
};
