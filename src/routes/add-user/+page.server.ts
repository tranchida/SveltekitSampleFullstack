import { prisma } from "$lib/server/database";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const employed = data.get("employed") as string;

    // Validation basique
    if (!email || !password || !firstName || !lastName || !employed) {
      return fail(400, {
        error: "Tous les champs sont requis",
        email,
        firstName,
        lastName,
        employed
      });
    }

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return fail(400, {
        error: "Cet email est déjà utilisé",
        email,
        firstName,
        lastName,
        employed
      });
    }

    try {
      await prisma.user.create({
        data: {
          email,
          password,
          firstName,
          lastName,
          employed
        }
      });

    } catch (error) {
      
      return fail(500, {
        error: "Erreur lors de la création de l'utilisateur",
        email,
        firstName,
        lastName,
        employed
      });
    }

    redirect(303, "/about"); // Rediriger vers la page des utilisateurs
  }
}; 