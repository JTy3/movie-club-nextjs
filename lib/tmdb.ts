import axios from "axios";

const TMDB_BASE = `https://api.themoviedb.org/3`;

export class TMDBService {
  // Get movie data
  async getMovieData(movieId: any) {
    try {
      let result;
      await axios
        .get(
          `${TMDB_BASE}/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
        )
        .then((response) => {
          result = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  // Get TV show data
}
