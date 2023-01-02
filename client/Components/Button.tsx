import { MouseEventHandler, ReactNode } from "react";
export default function ShuffleButton(props: {
  content: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <div className="   dark:bg-bd-1 bg-blue-200 flex items-center  justify-center p-5 ">
      <button
        onClick={props.onClick}
        className="hover:dark:bg-but-d  p-5 rounded-full border-2  w-48 border-but-d bg-zinc-600  text-blue-50 dark:bg-bd-1 "
      >
        {props.content}
      </button>
    </div>
  );
}
