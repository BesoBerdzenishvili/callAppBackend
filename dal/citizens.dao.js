const citizens = require("./index").db("store").collection("citizens");

const ObjectId = require("mongodb").ObjectId;

//Create
const save = async ({ id, name, email, gender, address, phone }) => {
  const result = await citizens.insertOne({
    id,
    name,
    email,
    gender,
    address,
    phone,
  });
  //returns the inserted data
  return result.insertedId;
};

//Read All
const getAll = async () => {
  const cursor = await citizens.find();
  return cursor.toArray();
};

//Read Specific citizens
const getById = async (id) => {
  return await citizens.findOne({ _id: ObjectId(id) });
};
//Update
const update = async (_id, { id, name, email, gender, address, phone }) => {
  console.log(id);
  const result = await citizens.replaceOne(
    { _id: ObjectId(_id) },
    { id, name, email, gender, address, phone }
  );
  return result.insertedId;
};
//Remove
const removeById = async (id) => {
  await citizens.deleteOne({ _id: ObjectId(id) });
};

module.exports = { getAll, getById, removeById, save, update };
