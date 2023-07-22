import {
  HomeIcon,
  UserGroupIcon,
  FilmIcon,
  TvIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui';
import Link from 'next/link';

const DashboardNav: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div className="h-screen sticky top-0 flex w-16 flex-col justify-between border-e bg-white">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            {session?.user?.name?.charAt(0)}
          </span>
        </div>

        <div className="border-t border-gray-100">
          <nav aria-label="Main Nav" className="flex flex-col p-2">
            <div className="py-4">
              <Link
                href={`/app`}
                className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
              >
                <HomeIcon className="h-6 w-6" />
                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                  Home
                </span>
              </Link>
            </div>

            <ul className="space-y-1 border-t border-gray-100 pt-4">
              <li>
                <Link
                  href={`/app/movies`}
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <FilmIcon className="h-6 w-6" />
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Movies
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/app/groups`}
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <UserGroupIcon className="h-6 w-6" />
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Groups
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <Button
          variant="primary"
          onClick={() => signOut({
            callbackUrl: `/`
          })}
          type="submit"
          className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
          <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
            Logout
          </span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardNav;
