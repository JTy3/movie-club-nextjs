import client from "./prismadb";

export class UserService {
  // Get User

  // Create User

  // Update User
  async updateUser(data: any) {
    return await client.user.update({
      data: data,
      where: {
        id: data.id,
      },
    });
  }

  // Remove User

  // Get all users
  async getUsers() {
    return await client.user.findMany();
  }
}
