import { connect } from "mongoose";

export  const connectDB = async (URI)=>{
    const options = {
        dbname:"user"
    }
    const {dbname} = options;
    try {
        const res = await connect(URI,options);
        console.log("connection sucessfully",dbname);
    } catch (error) {
        console.log(error,"Connection failed!");
    }
}
