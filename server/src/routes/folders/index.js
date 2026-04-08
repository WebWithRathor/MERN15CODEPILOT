import { Router } from "express";
import {
  createFolder,
  deleteFolder,
  getFolders,
  updateFolder,
} from "../../controllers/folders/index.js";

const router = Router();

router.post("/create", createFolder);
router.get("/", getFolders);
router.put("/update", updateFolder);
router.delete("/:name", deleteFolder);

export default router;
