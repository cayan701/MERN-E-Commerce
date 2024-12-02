const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  const user = new userModel({
    fullname: { firstname, lastname },
    email,
    password,
  });

  return await user.save(); // Ensure save() is called to persist the data
};
