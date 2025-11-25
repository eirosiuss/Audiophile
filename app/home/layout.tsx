import Nav from "@/app/home/nav";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav/>
      <div>{children}</div>
      <Footer />
    </>
  );
}
