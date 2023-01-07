import { useRouter } from "next/router";
import Link from "next/link";
import WeekComponent from "../../../Components/WeekComponent";
import HomeButton from "../../../Components/HomeButton";
import ToggleButton from "../../../Components/ToggleButton";
import Header from "../../../Components/Header";
import React from "react";
import Navbar from "../../../Components/Navbar";

function ProductDetail() {
  const router = useRouter();
  const { params = [] } = router.query;
  const yearId = router.query.yearId;

  const array = Array(1).fill("");
  const weekList = array.map((week, i) => {
    return <WeekComponent key={"week" + { yearId } + (i + 1)} year={yearId} week={i + 37} />;
  });

  // console.log(weekList);
  // console.log(params);
  console.log(yearId);

  return (
    <>
      <div className="dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1 grid  ">
        <Navbar />
        <Header pageHeader="Select Week" subHeader={""} />
        <div className=" h-screen p-5 gap-4 flex justify-center col-span-full dark:bg-bd-1 bg-bl-1 ">{weekList}</div>
      </div>
    </>
  );
}

export default ProductDetail;

// bg-bl-1  gap-4  h-screen items-center p-5 flex-col flex dark:bg-bd-1
{
  /* <div className="dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1  relative grid    ">
  <div>
    <Navbar />
    <Header pageHeader="Select Week" subHeader={""} />
 
  </div>
</div>; */
}

{
  /* <div className="h-screen bg-bl-1  ">
<div>
  <Navbar />
</div>
<div>
  <div className="flex items-center  justify-between dark:bg-bd-1 "></div>
  <div
    className="
    h-screen
    bg-bl-1 
  dark:bg-bd-1
  p-20
gap-5 flex flex-col items-center justify-center 
sm:items-center sm:justify-center
sm:grid
sm:grid-cols-2
md:grid 
md:grid-cols-3 
lg:grid-cols-4
 "
  >
    {weekList}
  </div>
</div>
</div> */
}
