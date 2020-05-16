const { Relationship } = require("@keystonejs/fields");

const ModuleList = {
  fields: {
    references: { type: Relationship, ref: "Reference" },
    education: { type: Relationship, ref: "Education" },
    skills: { type: Relationship, ref: "Skill" },
    awards: { type: Relationship, ref: "Award" },
    work: { type: Relationship, ref: "Work" },
    interests: { type: Relationship, ref: "Interest" },
  },
};

module.exports = ModuleList;
