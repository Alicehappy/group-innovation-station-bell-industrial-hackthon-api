import fs from "fs";

export const getEvents = (_req, _res) => {
  try {
    const eventsData = fs.readFileSync("./seeds/events-data.json");
    const parsedEventsData = JSON.parse(eventsData);
    _res.json(parsedEventsData);
  } catch (error) {
    console.log(error);
  }
};

export const getEvent = (_req, _res) => {
  try {
    const passedId = _req.params.id;
    const eventsData = fs.readFileSync("./seeds/events-data.json");
    const parsedEventsData = JSON.parse(eventsData);
    const foundEvent = parsedEventsData.find(
      (currentEvent) => currentEvent.id == passedId
    );
    if (!foundEvent) {
      return _res.status(400).json({ message: "event not found" });
    }
    _res.json(foundEvent);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getEvents,
  getEvent,
};
