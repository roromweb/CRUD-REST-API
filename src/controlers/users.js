import User from "../models/user.model.js";

const getAllUsers = async (req, res) => {
  try{
  const users = await User.find();

  res.json(users);}
  catch(e){
    res.sendStatus(500).json(e)
  }
};

const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const user = await User.findById(id);
      return res.json(user);
    } else {
      res.status(400).json({ message: "Id не указан" });
    }
  } catch (e) {
    res.status(500).json(e);
  }
};

const addNewUsers = async (req, res) => {
  try {
    const { name, age } = req.body;
    console.log(req.body);

    if (name && age) {
      const user = new User({
        name,
        age,
      });
      await user.save();

      return res.status(201).json();
    } else {
      return res.sendStatus(408);
    }
  } catch (e) {
    res.status(500).json(e);
  }
};
const deleteUsers = async (req, res) => {
  const id = req.params.id;

  try {
    const currentUser = await User.findById(id);
    if (currentUser) {
      await User.findByIdAndDelete(id);
      return res.sendStatus(200);
    }
  } catch (e) {
    return res.sendStatus(501).json(e);
  }
};
const updateUsers = async (req, res) => {
  const id = req.params.id;
  if (Object.keys(req.body)) {
    const currentUser = await User.findById(id);
    if (currentUser) {
      await User.findOneAndUpdate(
        {
          _id: id,
        },
        { ...req.body },
        { returnOriginal: false }
      );
      return res.send(200).json(currentUser);
    }
    return res.sendStatus(404);
  }
  return res.sendStatus(400);
};

const updateOneUser = async (req, res) => {
  try {
    const user = req.body;
    if (!user._id) {
      res.status(400).json({ message: "Id не указан" });
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return res.json(updatedUser);
  } catch (e) {
    res.status(500).json(e);
  }
};
export default {
  getAllUsers,
  getOneUser,
  addNewUsers,
  deleteUsers,
  updateUsers,
  updateOneUser,
};
