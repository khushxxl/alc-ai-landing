"use client";

import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Working from "@/components/landing/working";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/NNr0wGs/cosmic-wallpaper.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className=""
    >
      <Hero />
      <Working />
      <Footer />
    </div>
  );
}
