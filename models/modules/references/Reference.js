const { Relationship } = require("@keystonejs/fields");
const Module = require("../Module");

const References = {
  ...Module,
  fields: {
    ...Module.fields,
    content: {
      type: Relationship,
      ref: "ReferenceItem",
      many: true,
    },
  },
};

module.exports = References;
