import { DashboardNav, Banner } from "@/components/Dashboard";
import { Card } from "@/components/ui";
import { GroupService } from "@/lib/group";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useState, useEffect } from "react";

const MyGroupsPage = () => {
  const [groups, setGroups] = useState<any>([]);

  useEffect(() => {
    const getGroups = async () => {
      await axios.get(`/api/users/groups`).then((response) => {
        console.log(response);
        setGroups(response.data);
      });
    };

    getGroups();
  }, []);
  
  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
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
            <Link href={`/app/groups/new`}>Create a new group</Link>
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
        destination: "/",
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
