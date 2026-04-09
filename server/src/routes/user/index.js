import { Router } from "express";
import {
  register,
  login,
  refreshToken,
  me,
} from "../../controllers/user/index.js";
import {
  validateRegister,
  validateLogin,
} from "../../middlewares/validators/user.validator.js";
import { isAuthenticated } from "../../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.post("/refresh-token", refreshToken);
router.get("/me", isAuthenticated, me);

export default router;
