import React, { useState, useContext } from "react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import MyThemeContext from "../store/myThemeContext";
import ToggleButton from "./ToggleButton";

export default function Header(props: {
  pageHeader:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const [darkOn, setDarkOn] = useState(false);
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
    setDarkOn((prevDarkOn) => !prevDarkOn);
  }

  return (
    <div className=" bg-slate-300 text-slate-800 dark:bg-zinc-800 dark:text-zinc-100 font-bold text-4xl justify-center h-32 flex relative items-center">
      <div>{props.pageHeader}</div>

      <div className="absolute right-0 bg-zinc-800  ">
        <ToggleButton />
      </div>
    </div>
  );
}
