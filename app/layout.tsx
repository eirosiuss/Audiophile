import "@/app/global.css";
import { manrope } from "@/app/fonts";
import Nav from "@/app/_ui/navigation/nav";
import Footer from "@/app/_ui/footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Nav />
        <div className="mt-22.5">{children}</div>
        <Footer/>
        </body>
    </html>
  );
}