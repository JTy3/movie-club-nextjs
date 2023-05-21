import HeaderNav from "@/components/HeaderNav";

const TvShowsPage: React.FC = () => {
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
              <h2 className="text-3xl font-bold sm:text-4xl">TV Shows</h2>

              <p className="mt-4 text-gray-600">
                Below are just a few of the TV Shows you can add to your watch list.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TvShowsPage;
