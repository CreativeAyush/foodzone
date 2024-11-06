const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://foodzonemern:mern123@cluster0.xgont.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to database");

    const db = mongoose.connection.db;
    const collection = db.collection('foodzonemern'); // Ensure 'foodzonemern' is the correct collection name
    const data = await collection.find({}).toArray();

    console.log(data);
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = mongodb;
