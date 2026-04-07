import path from "path";
import fs from "fs";
import { customError, success } from "../../utils/response.util.js";

export const createFolder = async (req, res) => {
  const currentDir = path.resolve() + "/assets";
  fs.mkdir(`${currentDir}/name`, {}, (err) => {
    if (err) {
      return customError(res, {}, 500, err.message || "Error creating folder");
    }
    return success(res, { message: "Folder created successfully" });
  });
};
