import type { NextApiRequest, NextApiResponse } from 'next';

import clientPromise from '../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await (await clientPromise).db('myFirstDatabase');
  const affirmation = await db.collection('affirmations').findOne();
  res.status(200).json(affirmation.content);
};
