const { Text } = require("@keystonejs/fields");

const ReferenceItem = {
  fields: {
    reference: { type: Text },
    name: { type: Text },
  },
};

module.exports = ReferenceItem;
