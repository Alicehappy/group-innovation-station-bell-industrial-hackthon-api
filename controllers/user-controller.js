import fs from "fs";
import path from "path";

//get all user list
export const getUsers = (_req, _res) => {
  try {
    const filePath = path.join("./seeds/user-data.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);
    _res.json(users);
  } catch (error) {
    console.log(error);
    _res.status(500).json({ message: "Error fetching users" });
  }
};

//post new user to the list
export const postUser = (_req, _res) => {
  try {
    const {
      "employee-id": employeeId,
      name,
      "job-title": jobTitle,
      group,
      "group-id": groupId,
      concern,
    } = _req.body;

    // Check if all fields are provided
    if (!employeeId || !name || !jobTitle || !group || !groupId || !concern) {
      return _res.status(400).json({ message: "All fields are required" });
    }

    const filePath = path.join("./seeds/user-data.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);

    const newUser = {
      "employee-id": employeeId,
      name: name,
      "job-title": jobTitle,
      group: group,
      "group-id": groupId,
      concern: concern,
    };

    users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");

    _res.status(201).json({ message: "User added successfully", newUser });
  } catch (error) {
    console.log(error);
    _res
      .status(500)
      .json({ message: "Error adding user, could not post user details" });
  }
};

export default {
  getUsers,
  postUser,
};
