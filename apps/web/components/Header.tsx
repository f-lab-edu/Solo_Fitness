"use client"; // ✅ 추가

import Link from "next/link";
import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Link href="/">홈</Link>
        <Link href="/products">제품 목록</Link>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background: white;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  font-size: 16px;
`;
