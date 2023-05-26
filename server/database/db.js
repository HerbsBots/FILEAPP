import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONGODB_URL = `mongodb://TaiBann00:myfilesharingapp@ac-qhyq2ua-shard-00-00.h7jbgs8.mongodb.net:27017,ac-qhyq2ua-shard-00-01.h7jbgs8.mongodb.net:27017,ac-qhyq2ua-shard-00-02.h7jbgs8.mongodb.net:27017/?ssl=true&replicaSet=atlas-sisyw9-shard-0&authSource=admin&retryWrites=true&w=majority`;
   try {
        await mongoose.connect(MONGODB_URL, {useNewUrlParser: true});
        console.log('Database connected successfully')
   } catch (error) {
        console.error('Error while connecting with the database', error.message);
   } 
}

export default DBConnection;