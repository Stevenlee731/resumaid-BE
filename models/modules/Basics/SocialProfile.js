const { Text, Url } = require("@keystonejs/fields");

const Profile = {
  fields: {
    username: { type: Text },
    network: { type: Text },
    url: { type: Url },
  },
};

module.exports = Profile;
