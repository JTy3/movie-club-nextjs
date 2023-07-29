import { DashboardNav, Banner } from "@/components/Dashboard";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { GroupService } from "@/lib/group";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Grid, GridItem } from "@/components/ui";
import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";

const MyGroupsPage = ({ groupInfo }: any) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [user, setUser] = useState<any>(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      axios.get(`/api/users`).then((response) => {
        setUsers(response.data);
      });
    };

    getUsers();
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios
      .post(`/api/users/groups`, {
        userId: user.id,
        groupId: groupInfo.id,
      })
      .then(() => {
        router.push(`/app/groups/${groupInfo.id}`);
      });
  };

  const filterUsers =
    query === ""
      ? users
      : users.filter((user: any) => {
          return user.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="mt-4">
            <Link
              className="text-blue-600 underline"
              href={`/app/groups/${groupInfo.id}`}
            >
              Back to Group
            </Link>
          </div>
          <hr className="my-8" />
          <Grid gap={8}>
            <GridItem xs={6}>
              <h2 className="text-xl font-bold text-gray-900 sm:text-xl">
                Invite someone
              </h2>
              <p className="mt-4 text-gray-500">
                Start typing their email or username to search
              </p>
              <form
                onSubmit={handleSubmit}
                className="mb-0 mt-4 max-w-md space-y-4"
              >
                <Combobox value={user?.name} onChange={setUser}>
                  <Combobox.Input
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Options>
                    {filterUsers.map((user: any) => (
                      <Combobox.Option key={user.name} value={user}>
                        {user.name}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
              
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
                  >
                    Add User
                  </button>
                </div>
              </form>
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
      groupInfo
    },
  };
}

export default MyGroupsPage;
