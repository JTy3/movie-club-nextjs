import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { InfoBar } from "@/components/Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const MoviePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<any>();
  const [relatedMovies, setRelatedMovies] = useState<any>();

  useEffect(() => {
    const fetchMovie = async () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_TOKEN}`,
            Accept: `application/json`,
          },
        })
        .then((res) => {
          setMovie(res.data);
        });
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  useEffect(() => {
    const getRelatedMovies = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${movie.genres[0].id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_TOKEN}`,
              Accept: `application/json`,
            },
          }
        )
        .then((res) => {
          setRelatedMovies(res.data.results);
        });
    };

    if (movie) {
      getRelatedMovies();
    }
  }, [movie]);

  return (
    <div>
      {movie ? (
        <section className="mb-10">
          <div className="mx-auto max-w-screen-lg">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {movie.original_title}
                </h2>
                <div className="flex my-3">
                  {movie.genres.map((genre: any) => {
                    return (
                      <div className="bg-red-600 text-white px-2 me-3 rounded-3xl">
                        <p>{genre.name}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-gray-600">{movie.overview}</p>
                <InfoBar
                  score={movie.vote_average}
                  ratings={movie.vote_count}
                />
                <Link className="text-red-500 font-bold" href={`/movies`}>
                  More movies
                </Link>
              </div>
              <div className="lg:py-24">
                <Image
                  className="m-auto rounded-2xl shadow-md"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={300}
                  height={200}
                  alt={`${movie.title} Poster Image from TMDB`}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-screen-lg">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 480px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {relatedMovies.map((movie: any) => {
                return (
                  <SwiperSlide className="rounded-xl">
                    <Link
                      href={`/movies/${movie.id}`}
                      className="bg-yellow-100"
                    >
                      <Image
                      className="rounded-2xl shadow-md"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        width={600}
                        height={600}
                        alt={movie.original_title}
                      />
                      {movie.original_title}
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePage;
