const { Text } = require("@keystonejs/fields");

const Location = {
  fields: {
    city: { type: Text },
    countryCode: { type: Text },
  },
};

module.exports = Location;
