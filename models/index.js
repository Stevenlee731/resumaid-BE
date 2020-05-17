const UserSchema = require("./User.js");

//modules
const ModuleList = require("./modules/ModuleList.js");
const Module = require("./modules/Module.js");

//awards
const AwardSchema = require("./modules/Awards/Award.js");
const AwardItemSchema = require("./modules/Awards/AwardItem.js");

//basics
const BasicSchema = require("./modules/Basics/Basic.js");
const LocationSchema = require("./modules/Basics/Location.js");
const SocialProfileSchema = require("./modules/Basics/SocialProfile.js");

//education
const EducationSchema = require("./modules/Education/Education.js");
const EducationItemSchema = require("./modules/Education/EducationItem.js");

//interests
const InterestSchema = require("./modules/Interests/Interest.js");
const InterestItemSchema = require("./modules/Interests/InterestItem.js");

//skills
const SkillSchema = require("./modules/Skills/Skill.js");
const SkillItemSchema = require("./modules/Skills/SkillItem.js");
const KeywordSchema = require("./modules/Skills/Keyword.js");

//work
const WorkSchema = require("./modules/Work/Work.js");
const WorkItemSchema = require("./modules/Work/WorkItem.js");
const HighlightSchema = require("./modules/Work/Highlight.js");

//references
const ReferenceSchema = require("./modules/References/Reference.js");
const ReferenceItemSchema = require("./modules/References/ReferenceItem.js");

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
