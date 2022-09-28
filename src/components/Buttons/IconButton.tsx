import React from "react";

type Props = { children: any };

export default function IconButton({ children }: Props) {
  return (
    <button className="rounded-full bg-dark dark:bg-light px-2 py-2 flex items-center justify-center gap-2 font-bold hover:scale-105 transition">
      {children}
    </button>
  );
}
