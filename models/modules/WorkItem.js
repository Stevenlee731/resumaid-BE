const { Text, Checkbox, Relationship } = require("@keystonejs/fields");

const WorkItem = {
  fields: {
    summary: { type: Text },
    website: { type: Text },
    company: { type: Text },
    pinned: { type: Checkbox },
    location: { type: Text },
    position: { type: Text },
    startDate: { type: Text },
    highlights: { type: Relationship, many: true, ref: "Highlight" },
  },
};

module.exports = WorkItem;
