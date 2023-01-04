import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function AlertBox(props: {
  message:
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
    <div>
      <div className="bg-bl-1  ">
        <div className=" w-36 h-36 flex p-5 text-bd-1">{props.message}</div>
      </div>
    </div>
  );
}
