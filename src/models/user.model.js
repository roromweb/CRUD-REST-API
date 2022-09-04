import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  name: String,
  age: Number,
});

const usersModel = mongoose.model("Users", usersSchema);

export default usersModel;
