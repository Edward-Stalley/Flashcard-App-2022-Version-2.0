import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function DialogBox(props: {
  message:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  onDialog: (arg0: boolean) => void;
}) {
  return (
    <div>
      <div className="dialog_box ">
        <div className="flex">
          <div className="dialog">{props.message}</div>
          <button
            className="flex bg-red-100 w-10 items-center justify-center"
            onClick={() => {
              props.onDialog(true);
            }}
          >
            Yes
          </button>
          <button className="bg-slate-100 w-10 flex items-center justify-center">No</button>
        </div>

        {/* <div className="fixed top-0 left-0 bottom-0 right-0 bg-blue-200"> */}
        {/* <div className="flex items-center justify-center absolute -top-1/2 -left-1/2 transform "></div> */}
      </div>
    </div>
  );
}
