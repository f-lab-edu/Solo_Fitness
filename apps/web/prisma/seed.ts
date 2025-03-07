import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "의자", price: 50000, description: "의자" },
      { name: "책상", price: 120000, description: "책상" }
    ],
  });
  console.log("데이터 삽입 완료");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());