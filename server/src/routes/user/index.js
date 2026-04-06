import { Router } from "express";
import { success } from "../../utils/response.util.js";

const router = Router();

router.get("/", (req, res) => {
  return success(res, {});
});

export default router;
