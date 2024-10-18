//post and get
//get all and get by id
import express from "express";
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router.route("/").get(userController.getUsers);
router.route("/").post(userController.postUser);

export default router;
