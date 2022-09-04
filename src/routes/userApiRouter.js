import express from "express";
import usersController from "../controlers/users.js";
const router = express.Router();


router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getOneUser);
router.put("/users/:id", usersController.updateOneUser);
router.post("/users", usersController.addNewUsers);
router.delete("/users/:id", usersController.deleteUsers);
router.patch("/users/:id", usersController.updateUsers);
export default router;
