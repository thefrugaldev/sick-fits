const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
  const sasha = await prisma.user.create({
    data: {
      name: "Sasha",
    },
  });

  console.log(sasha);
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
