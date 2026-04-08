import { Router } from "express";
import fileRoutes from "./file/index.js";
import folderRoutes from "./folders/index.js";
import userRoutes from "./user/index.js";

const router = express.Router();

router.use("/files", fileRoutes);
router.use("/folders", folderRoutes);
router.use("/auth", userRoutes);

export default router;
