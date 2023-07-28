import type { NextApiRequest, NextApiResponse } from "next";
import { GroupService } from "@/lib/group";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const groupService = new GroupService();
    return res.json(await groupService.getGroup(id as string));
  } catch (err: any) {
    return res.send(500);
  }
}
