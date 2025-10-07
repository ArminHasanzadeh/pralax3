"use client";

import { useState, useEffect } from "react";
import Header from "./Nav/Header/Header";
import Main from "./Component/Main/Main";
import Footer from "./Nav/Footer/Footer";

export default function Home() {


  return (
    <main className="bg-[var(--BgAllColor)] w-full  overflow-hidden">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
