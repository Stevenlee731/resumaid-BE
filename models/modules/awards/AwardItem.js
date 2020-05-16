const { Text } = require("@keystonejs/fields");

const AwardItem = {
  fields: {
    title: { type: Text },
    awarder: { type: Text },
  },
};

module.exports = AwardItem;
