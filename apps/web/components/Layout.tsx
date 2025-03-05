"use client"; // ✅ 추가

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
`;
