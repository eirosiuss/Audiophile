import Nav from "@/ui/nav";
import Footer from "../../ui/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
