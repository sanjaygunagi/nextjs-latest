import Image from "next/image";
import Contact from "./Contact";
import Navigation from "@/components/Navigation";
import prisma from "../../../lib/prisma";

async function getData() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
  /*   const res = await fetch("https://api.github.com/users");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json(); */
}

export default async function About() {
  const data = await getData();

  console.log("data", data.props.feed);

  return (
    <section>
      <Navigation />
      <p>{JSON.stringify(data)}</p>
      <h1>Hello About</h1>
      <Contact />
    </section>
  );
}
