const {
  Text,
  Checkbox,
  Password,
  Relationship,
} = require("@keystonejs/fields");

const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere

  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  console.log(auth, "auth");
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

const User = {
  fields: {
    username: {
      type: Text,
      isUnique: true,
    },
    basics: {
      type: Relationship,
      many: false,
      ref: "Basic",
    },
    references: { type: Relationship, ref: "Reference", many: false },
    education: { type: Relationship, ref: "Education", many: false },
    skills: { type: Relationship, ref: "Skill", many: false },
    awards: { type: Relationship, ref: "Award", many: false },
    work: { type: Relationship, ref: "Work", many: false },
    interests: { type: Relationship, ref: "Interest", many: false },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
    email: {
      type: Text,
      isUnique: true,
    },
  },
  // List-level access controls
  // access: {
  //   read: true,
  //   update: access.userIsAdminOrOwner,
  //   create: true,
  //   delete: access.userIsAdmin,
  //   auth: true,
  // },
};

module.exports = User;
