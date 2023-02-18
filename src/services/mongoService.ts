import mongoose from "mongoose";
import { mongoUrl } from "../config";

export const initMongo = (): Promise<void> =>
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("\nConnected to MongoDB ✅  ", mongoUrl);
    })
    .catch((err) => {
      console.log(`❌  MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    });
export default { initMongo };
