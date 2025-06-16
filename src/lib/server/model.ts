import prisma from "./prisma";

export async function getUsers() {
    return await prisma.users.findMany({
        orderBy: [{ lastname: "asc" }, { firstname: "asc" }],
    });
}

export async function switchActiveState(id : number) {
    const user = await prisma.users.findUniqueOrThrow({
        where: { id },
    });
    await prisma.users.update({
        where: { id },
        data: { active: !user.active },
    });
}