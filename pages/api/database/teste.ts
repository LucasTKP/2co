import { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../lib/connectMongoDb';

export default async function Teste(req: NextApiRequest, res: NextApiResponse) {
    const myDB = client.db("myDB");
    const myColl = myDB.collection("pizzaMenu");
    const doc = { name: "Neapolitan pizza", shape: "round" };
    const result = await myColl.insertOne(doc);
    console.log(
       `A document was inserted with the _id: ${result.insertedId}`,
    );
}
