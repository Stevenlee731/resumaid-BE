const { Relationship } = require("@keystonejs/fields");
const Module = require("../Module");

const Awards = {
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

module.exports = Awards;
