import Nav from "@/app/ui/dashboard/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>{children}</div>
    </div>
  );
}
