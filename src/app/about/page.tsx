import Image from "next/image";
import Contact from "./Contact";
import Navigation from "@/components/Navigation";
import prisma from "../../../lib/prisma";
import { useState } from "react";
import RootLayout from "../layout";

async function getData() {
  /*   const feed = await prisma.post.findMany({
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
    }; */
  const res = await fetch("https://api.github.com/users");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function About() {
  const data = await getData();

  console.log("data", data);

  return (

    <section>
      {/* <Navigation /> */}
      {
        data?.map((el: any) => {
          return <p key={el.login}>{el.login}</p>
        })
      }
      <h1>Hello About</h1>
      <input type="text" name="" id="" />
      <Contact />
    </section>

  );
}
