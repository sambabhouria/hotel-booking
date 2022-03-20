import mongoose from 'mongoose';
import { ConnectionOptions } from 'tls';

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectionOptions);
        console.log("<<=❤️❤️=>❤️❤️=>Database is connected <<=❤️❤️=>>");
    } catch (error: any) {
        console.log(error.message);
    }
}

export default connectDB;
