"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import type { PlayerRef } from "@lottiefiles/react-lottie-player";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function Computer() {
  const playerRef = useRef<PlayerRef>(null);

  return (
    <Player
      ref={playerRef as React.RefObject<PlayerRef>}
      speed={6}
      autoplay
      src="/animations/3.json" 
      style={{ width: "300px", height: "300px", margin: "0 0 0 21px" }}
      onEvent={(event) => {
        if (event === "complete") {
            // @ts-ignore
          playerRef.current?.goToLastFrame();
        }
      }}
    />
  );
}
