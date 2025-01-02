"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="max-w-[350px] md:max-w-full  mt-20 mb-28 flex flex-col antialiased  items-center justify-center relative overflow-hidden sm:mb-40">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with Joseph is a delight and highly recommended! Although there was a time zone difference between our offices and his current location of 10 hours, he has been very reachable, easy to work with, and dependable. Despite his young career, he is very professional and delivers high quality work.",
    name: "Karim Sleiman",
    title: "Maa Data",
    image: "/karim.jpeg",
  },
  {
    quote:
      "Joseph has worked with our tech company, Beepers on a freelance basis over the past year. He is great working independently and can produce high-level work with little supervision. I have no doubt that he will make an excellent addition to your team.",
    name: "Mansour Khoury",
    title: "Beepers",
    image: "mans.png",
  },
  {
    quote:
      "At first, I didn't know Joseph was so good; he exceeded my expectations, delivering impeccable work. He knows how to communicate, is professional, and provides high-quality service.",
    name: "Laurence Tors",
    title: "Real Estate Project",
    image: "laur.png",
  },
  {
    quote:
      "Joseph designed my brand's website with care and attention to what was requested. The result was a beautiful website, just as I envisioned. Thank you so much!",
    name: "Bruna Pinheiro",
    title: "Curandeiras de Nós",
    image: "bruna.jpeg",
  },
  {
    quote: "Joseph had been a great team member....",
    name: "Gustaf Gyllensporre",
    title: "CondoCube",
    image: "gustaf.png",
  },
];
