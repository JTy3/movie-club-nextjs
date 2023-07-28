// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { UserService } from '@/lib/user';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userService = new UserService();
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401);
    return;
  }

  if (req.method === 'PUT') {
    return res.json(await userService.updateUser(req.body));
  } else {
    return res.send(405);
  }
}
