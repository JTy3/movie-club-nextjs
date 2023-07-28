// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GroupService } from "@/lib/group";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const groupService = new GroupService();
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401);
    return;
  }

  if (req.method === "POST") {
    return res.json(
      await groupService.addUserToGroup(
        req.query.groupId as string,
        req.query.userId as string
      )
    );
  } else if (req.method === "GET") {
    return res.json(await groupService.getUserGroups(session.user?.id as string));
  } else {
    return res.send(405);
  }
}
