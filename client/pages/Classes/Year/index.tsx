import Link from "next/link";
import Header from "../../../Components/Header";
import ToggleButton from "../../../Components/ToggleButton";
import HomeButton from "../../../Components/HomeButton";

export default function YearSelector() {
  return (
    <div>
      <Header pageHeader="Select Your Class" subHeader={""} />
      <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-4 ">
        <HomeButton />
        <ToggleButton />
      </div>
      <div className="bg-slate-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
        <div className="bg-slate-400 dark:bg-bd-2   p-5 grid items-center justify-center ">
          <Link
            className="hover:bg-blue-100 bg-blue-200 dark:bg-bd-1 dark:text-td-1  h-fit w-64 p-5 rounded flex items-center m-1 justify-center"
            href="/Classes/Year/2022"
          >
            2022
          </Link>
          <Link
            className="hover:bg-blue-100 bg-blue-200 dark:bg-bd-1 dark:text-td-1  h-fit w-64 p-5 rounded flex items-center m-1 justify-center"
            href="/Classes/Year/2023"
          >
            2023
          </Link>
        </div>
      </div>
    </div>
  );
}
