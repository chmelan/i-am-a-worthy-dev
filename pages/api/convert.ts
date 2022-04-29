import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'
import output from '../../output.json'

export default async (req:  NextApiRequest, res: NextApiResponse ) => {
  // create a new instance of the db
  const db = await (await clientPromise).db("myFirstDatabase")

db.collection('cards').insertMany(output)

  


  // Use the client to return the name of the connected database.
  res.status(200).send("success!");
};