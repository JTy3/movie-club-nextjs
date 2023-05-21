import { Button } from "../ui";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const HeaderNav: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex w-0 flex-1 lg:hidden">
          <button
            className="rounded-full bg-gray-100 p-2 text-gray-600"
            type="button"
          >
            <span className="sr-only">Account</span>
            <UserIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a href="#">
            <span className="sr-only">Logo</span>
            <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
          </a>
        </div>

        <nav
          aria-label="Site Nav"
          className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex"
        >
          {session ? (
            <a className="text-gray-900" href="/app">
              Dashboard
            </a>
          ) : null}
          <Link className="text-gray-900" href={`/`}>
            Home
          </Link>
          <Link className="text-gray-900" href={`/how-it-works`}>
            How it works
          </Link>
          <Link className="text-gray-900" href={`/movies`}>
            Movies
          </Link>
          <Link className="text-gray-900" href={`/tv-shows`}>
            TV Shows
          </Link>
        </nav>

        <div className="items-center gap-4">
          {session ? (
            <Button variant="secondary" onClick={() => signOut()}>
              Log out
            </Button>
          ) : (
            <Button variant="primary" onClick={() => signIn()}>
              Log in
            </Button>
          )}
        </div>
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
          {session ? (
            <a className="shrink-0 px-4 text-gray-900" href="/app">
              Dashboard
            </a>
          ) : null}
          <Link className="text-gray-900" href={`/how-it-works`}>
            How it works
          </Link>
          <Link className="shrink-0 px-4 text-gray-900" href={`/movies`}>
            Movies
          </Link>
          <Link className="shrink-0 px-4 text-gray-900" href={`/tv-shows`}>
            TV Shows
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
