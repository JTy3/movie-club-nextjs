import client from "./prismadb";

export class GroupService {
  // Create a group - @TODO - make this more robust i.e: don't throw anything in there
  async createGroup(data: any) {
    return client.group.create({ data: data });
  }

  // Get a group
  async getGroup(groupId: string) {
    return client.group.findUnique({ where: { id: groupId } });
  }

  // Update a group
  async updateGroup(data: any) {
    return client.group.update({
      data: data,
      where: {
        id: data.id,
      },
    });
  }

  // Delete a group
  async deleteGroup(groupId: string) {
    return client.group.delete({
      where: {
        id: groupId,
      },
    });
  }
}