import client from './prismadb';

export class UserService {
  // Get User

  // Create User

  // Update User
  async updateUser(data: any) {
    await client.user.update({
      data: data,
      where: {
        id: data.id,
      },
    });
  }

  // Remove User
}
