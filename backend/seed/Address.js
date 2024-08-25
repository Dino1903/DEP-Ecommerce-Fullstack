const Address = require("../models/Address");

const addresses = [
  {
    _id: "65c26398e1e1a2106ac8fbd5",
    user: "65b8e564ea5ce114184ccb96",
    street: "main 11th",
    city: "lahore",
    state: "punjab",
    phoneNumber: "09452571272",
    postalCode: "9012",
    country: "pakistan",
    type: "Home",
    __v: 0,
  },
  {
    _id: "65c26412e1e1a2106ac8fbd8",
    user: "65b8e564ea5ce114184ccb96",
    street: "main 18th",
    city: "Noida",
    state: "uk",
    phoneNumber: "46286159",
    postalCode: "30s1273",
    country: "usa",
    type: "Buisness",
    __v: 0,
  },
];

exports.seedAddress = async () => {
  try {
    await Address.insertMany(addresses);
    console.log("Address seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
