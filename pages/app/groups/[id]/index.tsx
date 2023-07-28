import { DashboardNav, Banner } from '@/components/Dashboard';
import { GroupService } from '@/lib/group';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const GroupPage = ({ session, groupInfo }: any) => {
  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className='mt-4'>
            <Link className='text-blue-600 underline' href={`/app/groups`}>All Groups</Link>
          </div>
          <hr className="my-8" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            {groupInfo.name}
          </h2>
          <hr className="my-8" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Movie of the week
          </h2>
          <hr className="my-8" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Group Watchlist
          </h2>
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
        destination: '/',
        permanent: false,
      },
    };
  }

  const groupService = new GroupService();
  const groupInfo = JSON.parse(
    JSON.stringify(await groupService.getGroup(id as string))
  );

  return {
    props: {
      session,
      groupInfo,
    },
  };
}

export default GroupPage;
