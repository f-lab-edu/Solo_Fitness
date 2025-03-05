interface ProductPageProps {
    params: { id: string };
  }
  
  export default function ProductPage({ params }: ProductPageProps) {
    return (
      <main>
        <h1>상품 상세 페이지</h1>
        <p>상품 ID: {params.id}</p>
        <p>장바구니 추가</p>
      </main>
    );
  }
