import express from "express";
import * as testimonialsController from "../controllers/testimonials-controller.js";

const router = express.Router();

router.route("/").get(testimonialsController.getTestimonials);

export default router;
//get all
