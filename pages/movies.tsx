import HeaderNav from "@/components/HeaderNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    axios.get(`/api/movie/909`).then((res) => {
      setMovies(res.data.data)
    });
  });

  return (
    <div>
      <HeaderNav />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://m.media-amazon.com/images/M/MV5BOWJmMWRlYTMtMDQ3ZC00ZDI3LWEyNTMtY2FlNDhjODdlMGI0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX600_.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

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
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex gap-4 justify-between">
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {movies?.original_title}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By John Doe
                </p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="max-w-[40ch] text-sm text-gray-500">
                {movies?.overview}
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">
                  {movies?.release_date}
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">3 minute</dd>
              </div>
            </dl>
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {movies?.original_title}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By John Doe
                </p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="max-w-[40ch] text-sm text-gray-500">
                {movies?.overview}
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">
                  {movies?.release_date}
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">3 minute</dd>
              </div>
            </dl>
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {movies?.original_title}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By John Doe
                </p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="max-w-[40ch] text-sm text-gray-500">
                {movies?.overview}
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">
                  {movies?.release_date}
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">3 minute</dd>
              </div>
            </dl>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MoviesPage;
