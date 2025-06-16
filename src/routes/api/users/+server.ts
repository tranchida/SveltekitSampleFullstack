import prisma from "$lib/server/prisma";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
  const users = await prisma.users.findMany();
  return new Response(JSON.stringify(users), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
