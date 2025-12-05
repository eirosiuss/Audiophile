import Nav from "@/app/ui/nav";
import Footer from "@/app/ui/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <>{children}</>
      <Footer />
    </>
  );
}
