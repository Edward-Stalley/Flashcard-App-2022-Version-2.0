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
    <div
      className="h-screen w-fit bg-bl-1 
    dark:bg-bd-1 "
    >
      <div>
        <Navbar />
      </div>
      <div>
        <Header pageHeader="Select Week" subHeader={""} />
        <div className="flex items-center  justify-between dark:bg-bd-1 "></div>
        <div
          className="
          
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
    </div>
  );
}

export default ProductDetail;
