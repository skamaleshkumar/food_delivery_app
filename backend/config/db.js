import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://balakamal9629:NLZkqeZXcbWxAflC@cluster1.v8zjf36.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
