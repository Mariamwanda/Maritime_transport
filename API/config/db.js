import { connect } from "mongoose";
import { utilisateur } from "./env.js";


export const connectDB = async () =>{
    const MONGO_URI = process.env.MONGO_URI;
    console.log(MONGO_URI);
    if(!MONGO_URI) throw new Error('env variables : MONGO_URI is required');
    await connect(MONGO_URI,{
        dbName : utilisateur ? 'Transport' : 'maritime_tranport'
    });
}