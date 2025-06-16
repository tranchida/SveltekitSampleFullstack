import type { Users } from "@prisma/client";
import type { PageServerLoad, Actions } from "./$types";
import prisma from "$lib/server/prisma";

export const load = (async () => {
  const users: Users[] = await prisma.users.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return { users: users };
}) satisfies PageServerLoad;

export const actions = {
  switchState: async (event) => {
    console.log(event);
    const id = 1;
    const user = await prisma.users.findUniqueOrThrow({
      where: { id },
    });
    await prisma.users.update({
      where: { id },
      data: {
        active: !user.active,
        updatedAt: new Date(),
      },
    });
  },
} satisfies Actions;
