import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
            console.log(`Conectado con MongoDB ${ process.env.MONGO_URI }`);
        
    } catch (error) {
        console.log(`error: ${error}`);
        process.exit(1);
    }
}
export default conectarDB;
