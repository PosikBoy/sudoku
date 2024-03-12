"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  console.log(window.Telegram.WebApp);

  return (
    <>
      {window.Telegram.WebApp}
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
    </>
  );
}
