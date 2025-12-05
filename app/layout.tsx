import "@/app/global.css";
import { manrope } from "@/app/fonts";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
