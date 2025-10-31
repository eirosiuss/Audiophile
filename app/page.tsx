import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/login">
        <span>Log in</span>
      </Link>
    </main>
  );
}
