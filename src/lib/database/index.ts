import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseConn = {
  conn: Mongoose | null,
  promise: Promise<Mongoose> | null
}

let cached: MongooseConn = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'planetgig',
    bufferCommands: false,
    // connectTimeoutMS: 30000,
  })

  cached.conn = await cached.promise;

  return cached.conn;
}