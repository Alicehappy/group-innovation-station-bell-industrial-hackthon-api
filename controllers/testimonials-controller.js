import fs from "fs";

export const getTestimonials = (_req, _res) => {
  try {
    const testimonialsData = fs.readFileSync("./seeds/testimonials-data.json");
    const parsedtestimonialsData = JSON.parse(testimonialsData);
    _res.json(parsedtestimonialsData);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getTestimonials,
};
