import app from "./src/index.js";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const startServer = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

startServer();












