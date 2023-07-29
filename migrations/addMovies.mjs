import axios from "axios";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

axios
  .get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&region=US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_TOKEN}`,
        Accept: `application/json`,
      },
    }
  )
  .then((response) => {
    response.data.results.map(async (movie) => {
      await client.movie.create({
        data: {
          tmdbId: movie.id,
          title: movie.original_title,
          overview: movie.overview,
          posterPath: movie.poster_path,
          releaseDate: movie.release_date,
        },
      });
    });
  });
