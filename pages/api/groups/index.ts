// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GroupService } from "@/lib/group";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const groupService = new GroupService();

  if (req.method === "POST") {
    return res.json(await groupService.createGroup(req.body));
  } else {
    return res.send(405);
  }
}
