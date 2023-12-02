"use client";
import Landing from "@/components/Landing";
import Team from "@/components/Team";
import Security from "@/components/Security";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <main>
        <Landing />
        <Services />
        <Security />
        <Team />
      </main>
    </>
  );
}
