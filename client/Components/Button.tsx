import { MouseEventHandler, ReactNode } from "react";
export default function ShuffleButton(props: {
  content: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <div className="   dark:bg-bd-1 flex items-center  justify-center p-5 ">
      <button
        onClick={props.onClick}
        className="nav_button p-5 rounded-full border-2 hover:bg-but-d w-48 border-but-d   text-tl-1 dark:bg-bd-1 "
      >
        {props.content}
      </button>
    </div>
  );
}
