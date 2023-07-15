import Link from "next/link";

export default function Navigation() {
  return (
    <section>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </section>
  );
}
