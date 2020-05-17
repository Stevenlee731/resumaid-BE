const { Relationship } = require("@keystonejs/fields");
const Module = require("./Module");

const Award = {
  ...Module,
  fields: {
    ...Module.fields,
    content: {
      type: Relationship,
      ref: "AwardItem",
      many: true,
    },
  },
};

module.exports = Award;
