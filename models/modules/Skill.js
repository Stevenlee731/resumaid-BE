const { Relationship } = require("@keystonejs/fields");
const Module = require("./Module");

const Skill = {
  ...Module,
  fields: {
    ...Module.fields,
    content: {
      type: Relationship,
      ref: "SkillItem",
      many: true,
    },
  },
};

module.exports = Skill;
