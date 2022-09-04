import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { DB_HOST, DB_NAME, DB_PORT } = process.env;
const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, err => {
    if (err) return console.log(err);
    return console.log('Success connected to mongo');
  });
}

export default dbConnect;
