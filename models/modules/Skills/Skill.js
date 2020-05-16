const { Relationship } = require("@keystonejs/fields");
const Module = require("../Module");

const Skills = {
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

module.exports = Skills;
