const { Text, Relationship } = require("@keystonejs/fields");

const SkillItem = {
  fields: {
    level: { type: Text },
    name: { type: Text },
    keywords: {
      type: Relationship,
      many: true,
      ref: "Keyword",
    },
  },
};

module.exports = SkillItem;
