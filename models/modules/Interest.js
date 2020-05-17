const { Relationship } = require("@keystonejs/fields");
const Module = require("./Module");

const Interest = {
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

module.exports = Interest;
