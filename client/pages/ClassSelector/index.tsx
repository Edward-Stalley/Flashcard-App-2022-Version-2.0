import Link from "next/link";
import YearComponent from "../../Components/YearComponent";
import HomeButton from "../../Components/HomeButton";
import ToggleButton from "../../Components/ToggleButton";
import Header from "../../Components/Header";

export default function Product() {
  const yearArray = ["2022", "2023"];

  const yearList = yearArray.map((week, i) => {
    return <YearComponent key={"year" + yearArray[i]} year={yearArray[i]} />;
  });

  return (
    <div>
      <div>
        <Header pageHeader="Select Your Class" />
        <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-4 ">
          <HomeButton />
          <ToggleButton />
        </div>
        <div className="bg-slate-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
          <div className="bg-slate-400 dark:bg-bd-2   p-5 grid items-center justify-center ">{yearList}</div>
        </div>
      </div>
    </div>
  );
}
