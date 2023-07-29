import client from "./prismadb";

export class MovieService {
  // Create a movie - @TODO - make this more robust i.e: don't throw anything in there
  async createMovie(data: any) {
    return client.group.create({ data: data });
  }

  // Get a movie
  async getMovie(movieId: string) {
    return client.movie.findUnique({
      where: { id: movieId },
    });
  }

  async getMovieByTmdbId(tmbdId: number) {
    return client.movie.findUnique({
      where: { tmdbId: tmbdId },
    });
  }

  // Update a movie
  async updateMovie(data: any) {
    return client.movie.update({
      data: data,
      where: {
        id: data.id,
      },
    });
  }

  // Delete a movie
  async deleteMovie(movieId: string) {
    return client.movie.delete({ where: { id: movieId } });
  }

  // Watchlist functions
  async addMovieToUserWatchlist(movieId: string, userId: string) {
    return client.movieInUserWatchlist.create({
      data: {
        movieId: movieId,
        userId: userId,
      },
    });
  }

  async getUserWatchlist(userId: string) {
    return client.movieInUserWatchlist.findMany({
      where: { userId: userId },
      select: {
        movie: true,
      },
    });
  }
}
