import { DashboardNav, Banner } from '@/components/Dashboard';
import { Card } from '@/components/ui';
import { GroupService } from '@/lib/group';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const MyGroupsPage = ({ session, groups }: any) => {
  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <hr className="my-12" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Your Groups
          </h2>
          {groups.map((group: any) => {
            return (
              <Card key={group.group.id}>
                <Link href={`/app/groups/${group.group.id}`}>
                  {group.group.name}
                </Link>
              </Card>
            );
          })}
          <Card>
            <Link href={`/app/groups/new`}>
              Create a new group
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const groupService = new GroupService();
  const groups = JSON.parse(
    JSON.stringify(await groupService.getUserGroups(session.user?.id as string))
  );

  return {
    props: {
      session,
      groups,
    },
  };
}

export default MyGroupsPage;
