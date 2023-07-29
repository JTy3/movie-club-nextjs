// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MovieService } from "@/lib/movie";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const movieService = new MovieService();
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401);
    return;
  }

  if (req.method === "POST") {
    if (req.body.tmdbId) {
      // Get movie info w/ tmdb key
      const movie = await movieService.getMovieByTmdbId(
        parseInt(req.body.tmdbId)
      );
      return res.json(
        await movieService.addMovieToUserWatchlist(
          movie?.id as string,
          req.body.userId as string
        )
      );
    } else {
      return res.send(400);
    }
  } else if (req.method === "GET") {
    return res.json(
      await movieService.getUserWatchlist(session.user?.id as string)
    );
  } else {
    return res.send(405);
  }
}
