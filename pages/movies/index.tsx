import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const MoviesPage = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
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
        .then((res) => {
          setMovies(res.data.results);
        });
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Movies</h2>

              <p className="mt-4 text-gray-600">
                Below are just a few of the Movies you can add to your watch
                list.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-2/3 m-auto p-8">
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
          {movies.map((movie: any) => {
            return (
              <SwiperSlide className="rounded-xl" key={movie.id}>
                <Link href={`/movies/${movie.id}`} className="bg-yellow-100">
                  <Image
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
      </section>
    </div>
  );
};

export default MoviesPage;
