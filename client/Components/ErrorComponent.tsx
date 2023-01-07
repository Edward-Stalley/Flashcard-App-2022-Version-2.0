import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import AlertBox from "./AlertBox";
import ErrorImage from "./ErrorImage";

export default function ErrorComponent(props: {
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
    <div className="flex-row justify-center items-center relative   ">
      <ErrorImage />
      <div className=" mobile:text-sm text-2xl  ">
        <AlertBox message={props.message} />
      </div>
    </div>
  );
}
