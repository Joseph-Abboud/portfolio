"use client";

import { cn } from "@/lib/utils";
import { Img } from "@react-email/components";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-lg bg flex-shrink-0 px-8 py-6 md:w-[450px]
            bg-gray-100 border border-black/5  overflow-hidden  hover:bg-gray-200   dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
            key={item.name}
          >
            <blockquote>
              <span className=" relative z-20 text-sm leading-[1.6] text-left selection:font-normal">
                {item.quote}
              </span>
              {/* <div className="relative z-20 mt-6 flex flex-row items-start">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] font-normal text-left">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] font-normal text-left">
                    {item.title}
                  </span>
                </span>
              </div> */}
              <div className="relative z-20 mt-6 flex flex-row items-center">
                {/* add this div for the profile img */}
                <div className="mr-3">
                  <Img
                    src={item.image}
                    alt="profile"
                    height="50"
                    width="50"
                    className="rounded-full"
                  />
                </div>
                <span className="flex flex-col">
                  <span className=" text-md leading-[1.6] font-normal text-left">
                    {item.name}
                  </span>
                  <span className="font-semibold text-sm leading-[1.6] text-left">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
