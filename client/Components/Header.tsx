import React from "react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

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
  return (
    <div className="bg-slate-300 text-slate-800 dark:bg-zinc-600 dark:text-zinc-100 justify-center text-3xl  h-32 flex items-center">
      {props.pageHeader}
    </div>
  );
}
