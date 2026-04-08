import path from "path";
import fs from "fs";
import { customError, success } from "../../utils/response.util.js";

const currentDir = path.resolve() + "/assets";

export const createFolder = async (req, res) => {
  fs.mkdir(`${currentDir}/name`, {}, (err) => {
    if (err) {
      return customError(res, {}, 500, err.message || "Error creating folder");
    }
    return success(res, { message: "Folder created successfully" });
  });
};

export const getFolders = async (req, res) => {
  fs.readdir(currentDir, (err, files) => {
    if (err) {
      return customError(res, {}, 500, err.message || "Error reading folders");
    }
    return success(res, { files });
  });
};

export const updateFolder = async (req, res) => {
  const { name, newName } = req.body;
  fs.rename(`${currentDir}/${name}`, `${currentDir}/${newName}`, (err) => {
    if (err) {
      return customError(res, {}, 500, err.message || "Error updating folder");
    }
    return success(res, { message: "Folder updated successfully" });
  });
};

export const deleteFolder = async (req, res) => {
  const { name } = req.params;
  fs.rmdir(`${currentDir}/${name}`, { recursive: true }, (err) => {
    if (err) {
      return customError(res, {}, 500, err.message || "Error deleting folder");
    }
    return success(res, { message: "Folder deleted successfully" });
  });
};
