const { Relationship } = require("@keystonejs/fields");
const Module = require("./Module");

const Work = {
  ...Module,
  fields: {
    ...Module.fields,
    content: {
      type: Relationship,
      ref: "WorkItem",
      many: true,
    },
  },
};

module.exports = Work;
