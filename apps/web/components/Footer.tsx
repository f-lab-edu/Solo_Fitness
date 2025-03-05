"use client"; // ✅ 추가

import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 IKEA Clone. All rights reserved.</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: #f8f8f8;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  color: #555;
`;
