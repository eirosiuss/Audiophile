import Nav from "@/app/ui/nav";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <>{children}</>
    </>
  );
}
