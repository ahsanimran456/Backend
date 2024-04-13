import mongoose from 'mongoose';
import { DB_Name } from '../constant.js';


const ConnectDB = async () => {
    try {
        const DBConnection = await mongoose.connect(`${process.env.DB_URL}/${DB_Name}`);
        console.log("<------db connected---->");
    } catch (error) {
        console.log(`Mongodb error : ${error} `);
    }
}


export default ConnectDB