"use client";

import { useState, useEffect } from "react";
import Header from "./Nav/Header/Header";
import Main from "./Component/Main/Main";

export default function Home() {


  return (
    <main className="bg-[var(--BgAllColor)] w-full h-[2200vh] overflow-hidden">
      <Header />
      <Main />
    </main>
  );
}
