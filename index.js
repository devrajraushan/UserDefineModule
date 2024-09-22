//const {success,error} = require("./module/personalM"); old
import {success,error} from './module/personalM.js'; //New

//const { MongoClient } = require("mongodb"); old
import { MongoClient } from 'mongodb'; //New

const conn = MongoClient.connect("mongodb://localhost:27017");
conn.then(()=>{
    success("Database Connected",true);

})
.catch(()=>{
    error("Database Connection Failed",true);
})

