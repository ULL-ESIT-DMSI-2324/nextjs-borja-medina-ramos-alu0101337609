import Head from "next/head";
import Link from "next/link"
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/post/DMSI">Go to pages/post/[pid].js</Link>
      </li>
      <li>
        <Link href="/post/abc?foo=bar">Also goes to pages/post/[pid].js</Link>
      </li>
    </ul>
  )
}
