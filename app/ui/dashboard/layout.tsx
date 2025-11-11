import Nav from "@/app/ui/dashboard/nav";
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
