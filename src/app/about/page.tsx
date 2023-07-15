import Image from "next/image";
import Contact from "./Contact";
import Navigation from "@/components/Navigation";

async function getData() {
  const res = await fetch("https://api.github.com/users");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function About() {
  const data = await getData();

  return (
    <section>
      <Navigation />
      <p>{JSON.stringify(data)}</p>
      <h1>Hello About</h1>
      <Contact />
    </section>
  );
}
