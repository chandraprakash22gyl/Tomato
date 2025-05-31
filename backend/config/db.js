// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('url/food-del').then(()=>console.log("DataBase Connected"));
// }
import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        console.error("❌ MONGO_URI is missing in environment variables");
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoUri);
        console.log("✅ Database Connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1);
    }
};
