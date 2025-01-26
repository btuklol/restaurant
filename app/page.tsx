"use client";

import ContactPage from "./Components/ContactPage";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center border">
      <video
        className="fixed w-screen h-screen object-cover top-0 left-0 z-0"
        autoPlay
        muted
        loop
        src="/sushi.mp4"
      />
      <div className="absolute top-0 left-0 mx-auto w-full h-screen flex justify-center flex-wrap items-center z-10">
        <Hero />
        <div id="contact" className="w-full h-screen">
          <ContactPage />
        </div>
      </div>
    </div>
  );
}
