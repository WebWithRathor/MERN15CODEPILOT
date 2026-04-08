import User from "../../models/user.model.js";
import { sendTokens, sendAccessToken } from "../../utils/auth.util.js";
import { badRequest, customError, success } from "../../utils/response.util.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  sendTokens(user, 201, res);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return badRequest(res, {}, "Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    return customError(res, {}, 401, "Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return customError(res, {}, 401, "Invalid Credentials");
  }
  sendTokens(user, 200, res);
};

export const refreshToken = (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return customError(res, {}, 401, "Token is required");
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    sendAccessToken(res, payload);
  } catch (error) {
    return customError(res, {}, 403, "Invalid refresh token");
  }
};

export const me = async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password");
  return success(res, { user });
};
