import { MouseEventHandler, ReactNode } from "react";
export default function ShuffleButton(props: {
  content: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <div className="   dark:bg-bd-1 bg-blue-200 flex items-center justify-center p-5 ">
      <button
        onClick={props.onClick}
        className="hover:dark:bg-bd-2 dark:bg-zinc-200  p-5 rounded bg-zinc-600  text-blue-50 dark:text-zinc-700 "
      >
        {props.content}
      </button>
    </div>
  );
}
