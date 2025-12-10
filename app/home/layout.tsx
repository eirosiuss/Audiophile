import Nav from "@/app/ui/nav";
import Footer from "../ui/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <div className="mt-22.5">{children}</div>
      <Footer/>
    </>
  );
}
