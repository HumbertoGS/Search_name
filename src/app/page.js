"use client";
import { useState } from "react";

import ChangeColor from "./component/ChangeColor";
import Header from "./component/Header";
import Search from "./component/Search/Search";

export default function Home() {
  const [active, setActive] = useState(true);

  const handleChange = () => setActive(!active);

  return (
    <div className={active ? "dark" : ""}>
      <div
        className="bg-slate-100 text-black font-medium text-center h-screen
                    dark:bg-gray-600 dark:text-white"
      >
        <Header>
          <ChangeColor active={active} changeActive={handleChange} />
        </Header>

        <Search />
      </div>
    </div>
  );
}
