import React, { useState, useContext } from "react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import MyThemeContext from "../store/myThemeContext";
import BackButton from "./BackButton";
import ToggleButton from "./ToggleButton";

export default function Header(props: {
  pageHeader:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  subHeader:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
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
    <div className="relative">
      <div className="absolute top-4 left-4 z-10  p-2 rounded-full">
        <BackButton />
      </div>
      <div className=" font-roboto bg-bl-1  text-slate-800 mobile:gap-1 gap-3 dark:bg-bd-1 dark:text-bl-1 font-bold text-5xl justify-center  mobile:flex-col h-40 flex relative items-center mobile:text-4xl   ">
        <div>{props.pageHeader}</div>
        {props.subHeader && (
          <div className="">
            <div> {props.subHeader}</div>
          </div>
        )}

        <div className="absolute right-0  ">{/* <ToggleButton /> */}</div>
      </div>
    </div>
  );
}

// dark:border-bl-1 border-bd-2 border-b-2
