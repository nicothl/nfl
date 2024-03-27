"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState("/");
  function isSelected(link: string) {
    return link === selected;
  }

  const linkStyles =
    "border border-black p-4 font-semibold text-2xl rounded-lg border-4 hover:bg-blue-500";

  const navOptions = [
    {
      link: "/",
      name: "Home",
      styles: `${linkStyles} ${isSelected("/") && "bg-blue-400"}`,
    },
    {
      link: "/shoppingList",
      name: "Einkaufsliste",
      styles: `${linkStyles} ${isSelected("/shoppingList") && "bg-blue-400"}`,
    },
    {
      link: "/splitwise",
      name: "Splitwise",
      styles: `${linkStyles} ${isSelected("/splitwise") && "bg-blue-400"}`,
    },
    {
      link: "/recipes",
      name: "Rezepte",
      styles: `${linkStyles} ${isSelected("/recipes") && "bg-blue-400"}`,
    },
  ];

  return (
    <nav className="bg-blue-600 p-4 gap-8 flex z-10">
      {navOptions.map((e) => (
        <Link
          key={e.link}
          href={e.link}
          onClick={() => setSelected(e.link)}
          className={e.styles}
        >
          {e.name}
        </Link>
      ))}
    </nav>
  );
}
