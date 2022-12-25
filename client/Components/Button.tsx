import { MouseEventHandler, ReactNode } from "react";
export default function ShuffleButton(props: {
  content: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <div className="   dark:bg-bd-1 flex items-center justify-center p-4 ">
      <button onClick={props.onClick} className="dark:bg-zinc-200 bg-blue-200 p-5 m-5  rounded">
        {props.content}
      </button>
    </div>
  );
}