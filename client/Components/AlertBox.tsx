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
      <div className=" flex justify-center items-center ">
        <div>
          <div className=" m-10 flex justify-center text-1xl items-center  rounded w-96 mobile:w-fit p-2  bg-bd-1 text-bl-1 dark:bg-bl-1 dark:text-bd-1 ">
            {props.message}
          </div>
        </div>
      </div>
      {/* <div className="bg-bl-1  "> */}
      {/* <div className=" w-36 h-36 flex p-5 text-bd-1">{props.message}</div> */}
    </div>
    // </div>
  );
}
