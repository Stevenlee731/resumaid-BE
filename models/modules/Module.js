const { Text, Integer, Select } = require("@keystonejs/fields");

const Module = {
  fields: {
    module: {
      type: Select,
      options: "references, education, skills, work, interests, awards",
      isRequired: true,
    },
    order: { type: Integer },
    slot: {
      type: Select,
      options: "main, sidebar",
    },
  },
  //   access: {
  //     create: true,
  //     read: true,
  //     update: userCanUpdateItem, s
  //     delete: userIsAdminOrOwner,
  //   },
};

module.exports = Module;
