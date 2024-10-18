import express from "express";
import cors from "cors";
import "dotenv/config";

//init app
const app = express();

//set port
const PORT = process.env.PORT || 5050;

//local route imports
import eventsRoutes from "./routes/events-routes.js";
import userRoutes from "./routes/user-routes.js";
import therapyRoutes from "./routes/therapy-routes.js";
import testimonialsRoutes from "./routes/testimonials-routes.js";

//middleware for library
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

//middleware for routes
app.use("/events", eventsRoutes);
app.use("/gethelp", userRoutes);
app.use("/group", therapyRoutes);
app.use("/testimonials", testimonialsRoutes);

//listen on port
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
