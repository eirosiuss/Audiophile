import { neon } from "@neondatabase/serverless";
import Link from "next/link";

export default function Page() {
  async function create(formData: FormData) {
    "use server";
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get("comment");
    // Insert the comment from the form into the Postgres database
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
  }
  return (
    <main>
      <Link href="/login">
        <span>Log in</span>
      </Link>
      <form action={create}>
        <input type="text" placeholder="write a comment" name="comment" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
