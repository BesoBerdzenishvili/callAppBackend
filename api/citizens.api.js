const {
  getAll,
  getById,
  removeById,
  save,
  update,
} = require("../dal/citizens.dao");

const createCitizen = async ({ name, email, gender, address, phone }) => {
  const citizen = {
    name,
    email,
    gender,
    address,
    phone,
  };
  return await save(citizen);
};

const getCitizens = async () => {
  return await getAll();
};

const getCitizen = async (id) => {
  return await getById(id);
};

const deleteCitizen = async (id) => {
  return await removeById(id);
};

const updateCitizen = async (id, { name, email, gender, address, phone }) => {
  return await update(id, { name, email, gender, address, phone });
};

module.exports = {
  createCitizen,
  getCitizens,
  getCitizen,
  deleteCitizen,
  updateCitizen,
};
