import Link from "next/link";
import HomeButton from "../../Components/HomeButton";
import YearComponent from "../../Components/YearComponent";
import ToggleButton from "../../Components/ToggleButton";
import Header from "../../Components/Header";

export default function Product() {
  const yearArray = ["2022", "2023"];

  const yearList = yearArray.map((week, i) => {
    return <YearComponent key={"year" + yearArray[i]} year={yearArray[i] + (parseFloat(yearArray[i]) + 1)} />;
  });

  return (
    <div>
      <div>
        <Header pageHeader="Select The Year" subHeader={""} />
        <div className="flex items-center  justify-between bg-blue-200 dark:bg-bd-1   "></div>
        <div className="bg-blue-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
          <div className="bg-blue-100 dark:bg-bd-2 rounded  p-5 grid items-center justify-center ">{yearList}</div>
        </div>
      </div>
    </div>
  );
}
