import type { PageServerLoad, Actions } from "../../routes/about/$types";
import { getUsers, switchActiveState } from "./model";

export const loadUsers = (async () => {
  const users = await getUsers();
  return { users };
}) satisfies PageServerLoad;

export const userActions = {
  switchState: async ({ request }: { request: Request }) => {
    const data = await request.formData();
    const id = Number(data.get("id"));
    await switchActiveState(id);
  },
} satisfies Actions; 