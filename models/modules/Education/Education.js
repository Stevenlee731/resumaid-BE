const { Relationship, Integer, Text } = require("@keystonejs/fields");
const Module = require("../Module");

const Education = {
  ...Module,
  fields: {
    ...Module.fields,
    content: {
      type: Relationship,
      ref: "EducationItem",
      many: true,
    },
  },
};

module.exports = Education;
