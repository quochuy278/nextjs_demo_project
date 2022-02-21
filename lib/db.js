import { MongoClient } from "mongodb";


export async function connectToDatabase() {
    const client = await MongoClient.connect(
      "mongodb+srv://huy1234:huy123@cluster0.pfd53.mongodb.net/NextjsBlog?retryWrites=true&w=majority"
    );
  
    return client;
  }