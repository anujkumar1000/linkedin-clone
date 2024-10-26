import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    const cyan = "\x1b[36m";
    const reset = "\x1b[0m";
    console.log(`${cyan}MongoDB Connected: ${conn.connection.host}${reset}`);
  } catch (error) {
    const red = "\x1b[31m";
    console.error(
      `${red}Error connecting to MongoDB: ${error.message}${reset}`
    );
    process.exit(1);
  }
};
