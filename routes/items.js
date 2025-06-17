import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem
} from "../controllers/items.js";

const router = express.Router();

// All Routes are preceeded with /items
router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export default router;
