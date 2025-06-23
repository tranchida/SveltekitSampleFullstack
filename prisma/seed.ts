import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  const user = await prisma.user.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      employed: "Developer",
      email: "test@fake.com",
      password: "test",
    },
  });
  console.log("Database seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })