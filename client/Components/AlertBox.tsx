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
      <div className=" flex justify-center items-center dark:bg-bd-1 bg-bl-1 pb-10 ">
        <div>
          <div className=" dark:bg-bd-1  bg-bl-1 flex justify-center text-1xl items-center  rounded  mobile:w-fit p-2   text-bd-2 dark:text-bl-1 ">
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
