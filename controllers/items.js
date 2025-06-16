import { v4 as uuidv4 } from "uuid";

let items = [];

export const getItems = (req, res) => {
  res.send(items);
};

export const getItem = (req, res, next) => {
  try {
    const { id } = req.params;

    const foundItem = items.find((item) => item.id === id);

    if (foundItem) res.send(foundItem);
    else res.status(400).send("Item doesn't exist in database.");
  } catch (err) {
    next(err);
  }
};

export const createItem = (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (name && description) {
      const newItem = { id: uuidv4(), name, description };
      items.push(newItem);

      res.status(201).send("Item added successfully");
    } else {
      res
        .status(400)
        .send("Missing required fields: name and description are all required");
    }
  } catch (err) {
    next(err);
  }
};

export const updateItem = (req, res, next) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;

    if (name && description) {
      let foundItem = items.find((item) => item.id === id);

      if (foundItem) {
        foundItem.name = name;
        foundItem.description = description;

        res.send(`Item updated successfully`);
      } else {
        res.status(404).send("Wrong ID");
      }
    } else {
      res
        .status(400)
        .send("Missing required fields: name and description are all required");
    }
  } catch (err) {
    next(err);
  }
};

export const deleteItem = (req, res, next) => {
  try {
    const { id } = req.params;
    const foundItem = items.find((item) => item.id === id);

    if (foundItem) {
      items = items.filter((item) => item.id !== id);
      res.send("Item deleted successfully");
    } else {
      res.status(404).send("Wrong ID");
    }
  } catch (err) {
    next(err);
  }
};
