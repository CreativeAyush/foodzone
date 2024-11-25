const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://foodzonemern:mern123@cluster0.xgont.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    if(err) console.log("---",err)
    else{
    console.log("Connected to database");

    const fetched_data=await mongoose.connection.db.collection("foodzonemern");
    fetched_data.find({}).toArray(function(err,data){
      if(err) console.log(err);
      else{
        global.food_items = data;
      }
    });

    console.log(data);
  }
} catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = mongodb;
