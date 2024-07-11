const mongoose = require('mongoose');
// const mongoose = require('mongoose');
// use foordmern database name before query ?
const mongouri='mongodb+srv://foord:mernapp@cluster0.fimispn.mongodb.net/foordmern?retryWrites=true&w=majority&appName=Cluster0';
// const mongoDB=async ()=>{
//      await mongoose.connect(mongouri,()=>{

//          console.log('connected successfully');
//      });
// }
// // MongooseError: Mongoose.prototype.connect() no longer accepts a callback//and return promise so use async await,otherwise it will take time to connect
// module.exports= mongoDB;


// schema  is structure of data in database and provide validation in mongoose ,and mongodb is schemaless so if you store your data out of the structure then you will not get any alert 
// Mongoose bridges the gap between MongoDB's schema-less nature and the structured requirements of application development
// MongoDB is a NoSQL database that stores data in a flexible, schema-less format, while Mongoose is an Object Data Modeling (ODM) library that provides a schema-based solution for modeling MongoDB data in Node.js applications

const mongoDB = async () => {
    try {
        await mongoose.connect(mongouri);//{useNewUrlParser:true}
        console.log('MongoDB connected successfully');
const fetched_data=await mongoose.connection.db.collection("food_items");
const foodCategory=await mongoose.connection.db.collection("food_category");
// fetched_data.find({}).toArray(function(err,data){
//     if(err)console.error('MongoDB connection error:',err);
//     else console.log(data)
    
// const fetched_data = mongoose.connection.db.collection('food_items');
        const data = await fetched_data.find({}).toArray();
        const foodcat=await foodCategory.find({}).toArray();
        // console.log(data);
// })//{}for all data
// foodCategory.find({}).toArray(function(err,foodcat){
// if(err)console.log(err);
// else{
    global.food_items=data;
    global.foodcategory=foodcat; 
// }
// })

} catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = mongoDB;
