const { Relationship } = require("@keystonejs/fields");
const Module = require("../Module");

const Interests = {
  ...Module,
  fields: {
    ...Module.fields,
    content: {
      type: Relationship,
      ref: "InterestItem",
      many: true,
    },
  },
};

module.exports = Interests;
