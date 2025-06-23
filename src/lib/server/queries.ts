import { prisma } from "$lib/server/database";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../routes/about/$types";

export const loadUsers: PageServerLoad = async () => {
    const users = await prisma.user.findMany({
      orderBy: [{
        lastName: "asc",
      }, {
        firstName: "asc"
      }]
    });
    return { 
      users : users
    }
};

export const actionsUsers : Actions = {
  switchState: async ({ request }: { request: Request }) => {
    const data = await request.formData();
    const id = data.get("id") as string;
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      return { error: "User not found" };
    }
    await prisma.user.update({
      where: { id },
      data: { active: !user.active },
    });
  },
}