//get all and get by id
import express from "express";
import * as therapyController from "../controllers/therapy-controller.js";

const router = express.Router();

router.route("/").get(therapyController.getTherapists);

router.route("/:id").get(therapyController.getTherapist);

export default router;
