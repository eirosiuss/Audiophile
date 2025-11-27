import Nav from "@/app/ui/nav";
import Footer from "@/app/ui/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
