import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Navigation /> */}
      <h1>Home</h1>
    </main>
  );
}
