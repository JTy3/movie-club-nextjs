import Link from "next/link";

const MoviesPage: React.FC = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-sm text-center px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>

            <p className="mt-4 text-gray-600">
              Create watchlists with your friends and vote for a movie to watch
              each week. At the end of the week everyone gets a chance to leave
              their rating and reviews. Each group will then have their
              favourite movies ranked. Join multiple groups so you can have a
              movie club with different groups of friends and family!
            </p>

            <Link
              href={``}
              className="mt-8 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
            >
              Log in to get started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoviesPage;
