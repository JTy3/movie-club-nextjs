import { DashboardNav, Banner } from '@/components/Dashboard';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const MyGroupsPage = ({ session, groups }: any) => {
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios
      .post(`/api/groups`, {
        name: event.target.name.value,
      })
      .then(() => {
        router.push(`/app/groups`);
      });
  };

  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="mt-4">
            <Link className="text-blue-600 underline" href={`/app/groups`}>
              All Groups
            </Link>
          </div>
          <hr className="my-8" />
          <div className="mx-auto max-w-screen-xl">
            <div className="max-w-lg">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Create a new group
              </h1>

              <p className="mt-4 text-gray-500">
                Create a new group for your family, friends or colleagues or
                open the group to the public so you can make new friends from
                the wider community.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mb-0 mt-4 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Name
                </label>

                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter name"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Create group
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGroupsPage;
