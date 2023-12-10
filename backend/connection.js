require('dotenv').config()
const dbConnect = async () => {
    const mongoose = require("mongoose");
    const dbs = "mongodb+srv://amanhyper41:9826177992aa@cluster0.hsjonts.mongodb.net/FoodDev?retryWrites=true&w=majority"
// console.log(process.env.REACT_APP_MONGO_DB)
    try {
        await mongoose.connect(dbs);
        console.log("Connection Successful");

        const fetch_data = await mongoose.connection.db.collection("foood_items");
        const data = await fetch_data.find({}).toArray();
        const fetch_data2 = await mongoose.connection.db.collection("foodcategory");
        const data2 = await fetch_data2.find({}).toArray();
        global.food_items=data;
        global.foodcategory=data2;
        // console.log(data2);
    } catch (err) {
        console.log(err);
    }
}

dbConnect();
module.exports = dbConnect;
