// const {MongoClient} = require("mongodb");
// const uri =  "mongodb://localhost:27017"

// const dbName = 'movie';
// // const client = new MongoClient(uri);
// connect();
// async function connect(){
//     const client = new MongoClient(uri);
//     try{
//         await client.connect();
//         const db = client.db(dbName);
//         console.log(`connected to database ${db.databaseName}`);
//     }
//     catch(ex){
//         console.log(`something bad happen ${ex}`);
//     }
//     finally{
//         client.close();
//     }
// }

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/movie');
const SeatsSchema = {
    no:int
}
const item1 = new Item({
    no:8
});
const item2 = new Item({
    no:18
});
const item3 = new Item({
    no:28
});

const MovieSeatsSchema = {
    name: String,
    seats:[SeatsSchema]
};

const MovieList = mongoose.model("MovieList",MovieSeatsSchema);

