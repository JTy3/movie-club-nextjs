import HeaderNav from "@/components/HeaderNav";
import Link from "next/link";

const MoviesPage: React.FC = () => {
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
              <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>

              <p className="mt-4 text-gray-600">
                Create watchlists with your friends and vote for a movie to
                watch each week. At the end of the week everyone gets a chance
                to leave their rating and reviews. Each group will then have
                their favourite movies ranked. Join multiple groups so you can
                have a movie club with different groups of friends and family!
              </p>

              <Link
                href={``}
                className="mt-8 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
              >
                Log in to get started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoviesPage;
