import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ 특정 제품 조회 API (GET /api/products/:id)
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const productId = Number(params.id); // Number() 사용하여 안전하게 변환

    if (isNaN(productId)) {
      return NextResponse.json(
        { error: "유효한 상품 ID가 아닙니다." },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId }, // 숫자로 변환된 `id` 사용
    });

    if (!product) {
      return NextResponse.json(
        { error: "상품을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("🚨 Error fetching product:", error);
    return NextResponse.json(
      { error: "서버 오류 발생" },
      { status: 500 }
    );
  }
}
