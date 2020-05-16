const { Text } = require("@keystonejs/fields");

const EducationItem = {
  fields: {
    endDate: { type: Text },
    startDate: { type: Text },
    area: { type: Text },
    studyType: { type: Text },
    institution: { type: Text },
  },
};

module.exports = EducationItem;
