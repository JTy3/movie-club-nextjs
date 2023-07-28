import { DashboardNav, Banner } from "@/components/Dashboard";

const MyMoviePage = () => {
  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <hr className="my-12" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Your Movies
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MyMoviePage;
