import { Users } from "../../entity/Users";

export async function getUsers() {
    const users = await Users.find({
        order: { lastname: "asc", firstname: "asc" },
    });
    return users.map(user => ({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        employed: user.employed,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        active: user.active,
    }));
}

export async function switchActiveState(id : number) {
    const user = await Users.findOneOrFail({
        where: { id },
        select: ["active"],
    });
    await Users.update(id, {
        active: !user.active,
        updatedAt: new Date(),
    });
}