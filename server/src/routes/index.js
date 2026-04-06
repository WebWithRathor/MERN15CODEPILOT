import { Router } from "express";
import AdminRouter from "./admin/index.js";
import UserRouter from "./user/index.js";

const router = Router();

router.use("/admin", AdminRouter);
router.use("/user", UserRouter);

export default router;
