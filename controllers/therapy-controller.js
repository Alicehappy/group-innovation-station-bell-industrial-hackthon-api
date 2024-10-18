import fs from "fs";

export const getTherapists = (_req, _res) => {
  try {
    const therapistsData = fs.readFileSync("./seeds/therapy-data.json");
    const parsedtherapistsData = JSON.parse(therapistsData);
    _res.json(parsedtherapistsData);
  } catch (error) {
    console.log(error);
  }
};

export const getTherapist = (_req, _res) => {
  try {
    const passedId = _req.params.id;
    const therapistsData = fs.readFileSync("./seeds/therapy-data.json");
    const parsedtherapistsData = JSON.parse(therapistsData);
    const foundtherapist = parsedtherapistsData.find(
      (currenttherapist) => currenttherapist.id == passedId
    );
    if (!foundtherapist) {
      return _res.status(400).json({ message: "therapist not found" });
    }
    _res.json(foundtherapist);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getTherapists,
  getTherapist,
};
