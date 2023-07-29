import { DashboardNav, Banner } from "@/components/Dashboard";
import { Grid, GridItem } from "@/components/ui";
import { MovieService } from "@/lib/movie";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const YourMoviePage = ({ session, movieInfo }: any) => {
  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="my-4">
            <Link href={`/app/movies`}>All Movies</Link>
          </div>
          <hr className="my-8" />
          <Grid gap={8}>
            <GridItem className="my-auto" xs={6}>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {movieInfo.title}
                </h2>
                <p className="mt-4 text-gray-500">{movieInfo.overview}</p>
            </GridItem>
            <GridItem xs={6}>
              <Image
                className="m-auto rounded-2xl shadow-md"
                src={`https://image.tmdb.org/t/p/w500${movieInfo.posterPath}`}
                width={300}
                height={200}
                alt={`${movieInfo.title} Poster Image from TMDB`}
              />
            </GridItem>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const { id } = context.query;

  if (!session || !id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const movieService = new MovieService();
  let movieInfo = await movieService.getMovie(id as string);
  movieInfo = JSON.parse(JSON.stringify(movieInfo));

  return {
    props: {
      session,
      movieInfo,
    },
  };
}

export default YourMoviePage;
