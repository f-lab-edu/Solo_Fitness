import { ReactNode } from "react";
import Providers from "./providers";
import StyledComponentsRegistry from "../lib/registry";
import Layout from "../components/Layout"; // ✅ Layout 추가

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Layout>{children}</Layout> {/* ✅ Layout으로 감싸기 */}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
