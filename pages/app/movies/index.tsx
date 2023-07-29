import { DashboardNav, Banner } from "@/components/Dashboard";
import { Card } from "@/components/ui";
import { GroupService } from "@/lib/group";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useState, useEffect } from "react";

const MyMoviesPage = () => {
  const [watchlist, setWatchlist] = useState<any>([]);

  useEffect(() => {
    const getWatchlist = async () => {
      await axios.get(`/api/users/movies`).then((response) => {
        setWatchlist(response.data)
      })
    }

    getWatchlist()
  }, []);
  
  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <hr className="my-12" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Your Watchlist
          </h2>
          {watchlist.map((movie: any) => {
            return (
              <Card key={movie.movie.id}>
                <Link href={`/app/groups/${movie.movie.id}`}>
                  {movie.movie.title}
                </Link>
              </Card>
            );
          })}
          <Card>
            <Link href={`/movies`}>Add to watchlist</Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyMoviesPage;
