import express from "express";
import * as eventsController from "../controllers/events-controller.js";

const router = express.Router();

router.route("/").get(eventsController.getEvents);

router.route("/:id").get(eventsController.getEvent);

export default router;
//get all
