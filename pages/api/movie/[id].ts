import type { NextApiRequest, NextApiResponse } from "next";
import { TMDBService } from "@/lib/tmdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const tmdbService = new TMDBService();
    const data = await tmdbService.getMovieData(id);
    return res.status(200).json({
      status: 200,
      message: `Success`,
      data,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
}
