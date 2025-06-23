import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  const user = await prisma.user.createMany({
    data: [
      {
        firstName: "John",
        lastName: "Doe",
        employed: "Developer",
        email: "john.doe@fake.com",
        password: "test",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        employed: "Manager",
        email: "jane.smith@fake.com",
        password: "test",
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        employed: "Developer",
        email: "alice.johnson@fake.com",
        password: "test",
      },
      {
        firstName: "Bob",
        lastName: "Brown",
        employed: "Manager",
        email: "bob.brown@fake.com",
        password: "test",
      },
      {
        firstName: "Charlie",
        lastName: "Davis",
        employed: "Developer",
        email: "charlie.davis@fake.com",
        password: "test",
      },
      {
        firstName: "Diana",
        lastName: "Miller",
        employed: "Manager",
        email: "diana.miller@fake.com",
        password: "test",
      },
      {
        firstName: "Eve",
        lastName: "Wilson",
        employed: "Developer",
        email: "eve.wilson@fake.com",
        password: "test",
      },
      {
        firstName: "Frank",
        lastName: "Moore",
        employed: "Manager",
        email: "frank.moore@fake.com",
        password: "test",
      },
      {
        firstName: "Grace",
        lastName: "Taylor",
        employed: "Developer",
        email: "grace.taylor@fake.com",
        password: "test",
      },
      {
        firstName: "Hank",
        lastName: "Anderson",
        employed: "Manager",
        email: "hank.anderson@fake.com",
        password: "test",
      },
      {
        firstName: "Ivy",
        lastName: "Thomas",
        employed: "Developer",
        email: "ivy.thomas@fake.com",
        password: "test",
      },
      {
        firstName: "Jack",
        lastName: "Jackson",
        employed: "Manager",
        email: "jack.jackson@fake.com",
        password: "test",
      },
      {
        firstName: "Karen",
        lastName: "White",
        employed: "Developer",
        email: "karen.white@fake.com",
        password: "test",
      },
      {
        firstName: "Leo",
        lastName: "Harris",
        employed: "Manager",
        email: "leo.harris@fake.com",
        password: "test",
      },
      {
        firstName: "Mia",
        lastName: "Martin",
        employed: "Developer",
        email: "mia.martin@fake.com",
        password: "test",
      },
      {
        firstName: "Nina",
        lastName: "Thompson",
        employed: "Manager",
        email: "nina.thompson@fake.com",
        password: "test",
      },
      {
        firstName: "Oscar",
        lastName: "Garcia",
        employed: "Developer",
        email: "oscar.garcia@fake.com",
        password: "test",
      },
      {
        firstName: "Paul",
        lastName: "Martinez",
        employed: "Manager",
        email: "paul.martinez@fake.com",
        password: "test",
      },
      {
        firstName: "Quinn",
        lastName: "Robinson",
        employed: "Developer",
        email: "quinn.robinson@fake.com",
        password: "test",
      },
      {
        firstName: "Rachel",
        lastName: "Clark",
        employed: "Manager",
        email: "rachel.clark@fake.com",
        password: "test",
      },
      {
        firstName: "Sam",
        lastName: "Rodriguez",
        employed: "Developer",
        email: "sam.rodriguez@fake.com",
        password: "test",
      },
      {
        firstName: "Tina",
        lastName: "Lewis",
        employed: "Manager",
        email: "tina.lewis@fake.com",
        password: "test",
      },
      {
        firstName: "Uma",
        lastName: "Lee",
        employed: "Developer",
        email: "uma.lee@fake.com",
        password: "test",
      },
      {
        firstName: "Victor",
        lastName: "Walker",
        employed: "Manager",
        email: "victor.walker@fake.com",
        password: "test",
      },
      {
        firstName: "Wendy",
        lastName: "Hall",
        employed: "Developer",
        email: "wendy.hall@fake.com",
        password: "test",
      },
      {
        firstName: "Xander",
        lastName: "Allen",
        employed: "Manager",
        email: "xander.allen@fake.com",
        password: "test",
      },
      {
        firstName: "Yara",
        lastName: "Young",
        employed: "Developer",
        email: "yara.young@fake.com",
        password: "test",
      },
      {
        firstName: "Zane",
        lastName: "King",
        employed: "Manager",
        email: "zane.king@fake.com",
        password: "test",
      },
      {
        firstName: "Abby",
        lastName: "Scott",
        employed: "Developer",
        email: "abby.scott@fake.com",
        password: "test",
      },
      {
        firstName: "Ben",
        lastName: "Green",
        employed: "Manager",
        email: "ben.green@fake.com",
        password: "test",
      },
      {
        firstName: "Cathy",
        lastName: "Adams",
        employed: "Developer",
        email: "cathy.adams@fake.com",
        password: "test",
      },
      {
        firstName: "David",
        lastName: "Baker",
        employed: "Manager",
        email: "david.baker@fake.com",
        password: "test",
      },
      {
        firstName: "Ella",
        lastName: "Gonzalez",
        employed: "Developer",
        email: "ella.gonzalez@fake.com",
        password: "test",
      },
      {
        firstName: "Finn",
        lastName: "Nelson",
        employed: "Manager",
        email: "finn.nelson@fake.com",
        password: "test",
      },
      {
        firstName: "Gina",
        lastName: "Carter",
        employed: "Developer",
        email: "gina.carter@fake.com",
        password: "test",
      },
      {
        firstName: "Henry",
        lastName: "Mitchell",
        employed: "Manager",
        email: "henry.mitchell@fake.com",
        password: "test",
      },
      {
        firstName: "Isla",
        lastName: "Perez",
        employed: "Developer",
        email: "isla.perez@fake.com",
        password: "test",
      },
      {
        firstName: "Jake",
        lastName: "Roberts",
        employed: "Manager",
        email: "jake.roberts@fake.com",
        password: "test",
      },
      {
        firstName: "Kara",
        lastName: "Turner",
        employed: "Developer",
        email: "kara.turner@fake.com",
        password: "test",
      },
      {
        firstName: "Liam",
        lastName: "Phillips",
        employed: "Manager",
        email: "liam.phillips@fake.com",
        password: "test",
      }
    ],
  });
  console.log("Database seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
