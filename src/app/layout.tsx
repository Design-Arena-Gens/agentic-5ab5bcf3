import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHANK3 Therapeutic Landscape",
  description:
    "Evidence-based overview of therapeutic strategies targeting SHANK3-related neurodevelopmental conditions."
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
