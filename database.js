// ********************************************************************************************
// Connecter à la base MongoDB Atlas
// ********************************************************************************************

const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://yakhouya:yakhouya@yakhouya-aibwq.mongodb.net/test?retryWrites=true&w=majority";

const connection = async()=>{
    await mongoose.connect(mongoDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then((res)=>{
        console.log('Successful connection to the database !')
    })
    .catch((err)=>{
        console.log('Error connecting to mongoDB Atlas.\n' , err)
    })
}
module.exports=connection      

