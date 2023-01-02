import { MouseEventHandler, ReactNode } from "react";
export default function ShuffleButton(props: {
  content: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <div className="   dark:bg-bd-1 flex items-center  justify-center p-5 ">
      <button
        onClick={props.onClick}
        className="nav_button p-5 rounded-full border-2 hover:bg-but-d   w-56 h-16 border-but-d   dark:text-bl-1 dark:bg-bd-1 "
      >
        {props.content}
      </button>
    </div>
  );
}
