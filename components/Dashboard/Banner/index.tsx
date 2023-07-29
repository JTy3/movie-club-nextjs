import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

const Banner: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <label className="sr-only" htmlFor="search">
                {" "}
                Search{" "}
              </label>

              <input
                className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search"
              />

              <button
                type="button"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
            </div>

            <a
              href="#"
              className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <span className="sr-only">Notifications</span>
              <BellIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Hey {session?.user?.name?.replace(/ .*/, "")}
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Seen any good movies lately?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
