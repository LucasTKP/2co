import { dbConnection } from '../../../lib/connectMongoDb';


export default class User {
    client: any;

    constructor() {
        this.client = dbConnection()
    }

    async create() {
        const myDB = this.client.db("myDB");
        const myColl = myDB.collection("pizzaMenu");
        const doc = { name: "Neapolitan pizza", shape: "round" };
        const result = await myColl.insertOne(doc);
        console.log(result);
    }

    async get() {
        const myDB = await this.client.db("myDB");
        const col = myDB.collection("pizzaMenu");
        const myDoc = await col.findOne();
        console.log(myDoc);
    }

}


