const { Text, Relationship } = require("@keystonejs/fields");

const Basics = {
  fields: {
    name: { type: Text },
    label: { type: Text },
    image: { type: Text },
    summary: { type: Text },
    website: { type: Text },
    profiles: {
      type: Relationship,
      ref: "SocialProfile",
      many: true,
    },
    location: {
      type: Relationship,
      ref: "Location",
      many: false,
    },
    email: {
      type: Text,
    },
  },
};

module.exports = Basics;
