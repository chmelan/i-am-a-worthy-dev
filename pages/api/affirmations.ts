import type { NextApiRequest, NextApiResponse } from 'next';

import clientPromise from '../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const db = await (await clientPromise).db('myFirstDatabase');
  const affirmation = await db.collection('affirmations').findOne();


  if (affirmation) {
    res.status(200).json(affirmation.content);
  }
  else {
    res.status(404).send("Sorry, we couldn't find an affirmation for you")
  }

};
