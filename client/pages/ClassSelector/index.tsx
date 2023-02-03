import Link from "next/link";
import HomeButton from "../../Components/HomeButton";
import YearComponent from "../../Components/YearComponent";
import ToggleButton from "../../Components/ToggleButton";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export default function Product() {
  const yearArray = ["2022"];

  // Use the Array below once new year starts
  // const yearArray = ["2022", "2023"];

  const yearList = yearArray.map((week, i) => {
    return <YearComponent key={"year" + yearArray[i]} year={yearArray[i] + (parseFloat(yearArray[i]) + 1)} />;
  });

  return (
    <>
      <div className="dark:bg-gray-800  bg-bl-1 text-bd-1 dark:text-bl-1 grid  ">
        <div>
          <Navbar />
          <Header pageHeader="Select Year" subHeader={""} />
        </div>
        <div>
          <div className=" min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
            <div className=" dark:bg-bd-1 rounded  p-5 gap-2 grid mobile:grid-cols-1 sm:grid-cols-1  md:grid-cols-1 xl:grid-cols-1 items-center justify-center ">
              {yearList}
            </div>
          </div>
          {/* <div className="flex items-center  justify-between bg-blue-200 dark:bg-bd-1   "></div>
          <div className="bg-blue-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
            <div className="bg-blue-100 dark:bg-bd-2 rounded  p-5 grid items-center justify-center ">{yearList}</div>
          </div> */}
        </div>
      </div>
    </>
  );
}
