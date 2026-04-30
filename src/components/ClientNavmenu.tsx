"use client";

import dynamic from "next/dynamic";

// Dynamically import Navmenu with ssr:false so Radix UI's generated aria-controls
// IDs are only produced on the client, preventing server/client hydration mismatch.
const Navmenu = dynamic(() => import("./Navmenu").then((m) => m.Navmenu), {
  ssr: false,
});

export default function ClientNavmenu() {
  return <Navmenu />;
}
