import { MongoClient } from 'mongodb';

export let db;

const path = 'mongodb://localhost';
const port = 27017;
const dbname = 'cbr';
const mongoDbString = `${path}:${port}/${dbname}`;

export const connect = (cb) => {
  MongoClient.connect(mongoDbString)
    .then((client) => {
      db = client.db();
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};
