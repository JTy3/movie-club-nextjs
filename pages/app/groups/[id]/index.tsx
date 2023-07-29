import { DashboardNav, Banner } from "@/components/Dashboard";
import { Grid, GridItem } from "@/components/ui";
import { GroupService } from "@/lib/group";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";

const GroupPage = ({ session, groupInfo }: any) => {
  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="my-4">
            <Link href={`/app/groups`}>All Groups</Link>
          </div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            {groupInfo.name}
          </h2>
          <hr className="my-8" />
          <Grid gap={8}>
            <GridItem xs={6}>
              <h2 className="text-xl font-bold text-gray-900 sm:text-xl">
                Movie of the week
              </h2>
            </GridItem>
            <GridItem xs={6}>
              <div className="border rounded-xl p-5">
                <h2 className="text-xl font-bold text-gray-900 sm:text-xl">
                  Group Members
                </h2>
                <ul className="mt-3">
                  {groupInfo.users &&
                    groupInfo.users.map((user: any) => {
                      return (
                        <li key={user.userId}>
                          {user.user.name}
                          <span className="whitespace-nowrap rounded-full ms-3 bg-green-100 px-2.5 py-0.5 text-sm text-green-700">
                            {user.role}
                          </span>
                        </li>
                      );
                    })}
                  <hr className="my-4 w-1/2" />  
                  <Link href={`/app/groups/${groupInfo.id}/add-user`}>
                    Invite someone
                  </Link>
                </ul>
              </div>
            </GridItem>
          </Grid>
          <hr className="my-8" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-xl">
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
        destination: "/",
        permanent: false,
      },
    };
  }

  const groupService = new GroupService();
  let groupInfo = await groupService.getGroup(id as string);
  groupInfo = JSON.parse(JSON.stringify(groupInfo));

  return {
    props: {
      session,
      groupInfo,
    },
  };
}

export default GroupPage;
