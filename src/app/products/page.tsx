"use client"

import Image from "next/image";
import Navigation from "@/components/Navigation";
import prisma from "../../../lib/prisma";
import { useEffect, useState } from "react";
import './products.scss'

export default function Products() {


  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch('https://api.github.com/users');
    const json = await response.json();
    console.log('json', json)
    setData(json);
  }

  useEffect(() => {
    getData()
  }, [])

  console.log('data', data)
  return (
    <section>
      {/* <Navigation /> */}
      <h1>Products</h1>
      {data?.map((el: any) => {
        return <p key={el.login} className="products__name">{el.login}</p>
      })}
    </section>
  );
}
