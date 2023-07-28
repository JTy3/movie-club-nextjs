import type { NextApiRequest, NextApiResponse } from "next";
import { TMDBService } from "@/lib/tmdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const tmdbService = new TMDBService();
    return res.json(await tmdbService.getMovieData(id))
  } catch (err: any) {
    return res.send(500)
  }
}
