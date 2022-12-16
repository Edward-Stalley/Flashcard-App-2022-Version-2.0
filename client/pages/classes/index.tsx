import Link from "next/link";
import ToggleButton from "../../Components/ToggleButton";

// My Components
import Header from "../../Components/Header";

export default function Classes() {
  return (
    <div>
      <Header pageHeader="Select Your Class" />

      <ToggleButton />
      <div className="bg-slate-200  p-10 h-4/5 flex-col flex justify-center items-center dark:bg-bd-1  ">
        <div className="bg-slate-400 h-fit w-96 p-5 grid items-center justify-center ">
          <Link
            className="hover:bg-blue-100 bg-blue-200  h-fit w-64 p-5 rounded flex items-center m-2 justify-center"
            href="/Classes/listening_kiso"
          >
            Listening Kiso
          </Link>
          <Link
            className="hover:bg-blue-100 bg-blue-200  h-fit w-64 p-5 rounded flex items-center  m-2 justify-center"
            href="/Classes/listening_shokyu"
          >
            Listening Shokyu
          </Link>
        </div>
      </div>

      {/* <Link
        className="bg-pink-300  hover:bg-pink-400 hover:bg-pink-400h-fit w-64 p-5 rounded flex items-center m-2 justify-center"
        href="/classes/skills_chukyu"
      >
        Skills Chukyu
      </Link> */}
    </div>
  );
}
