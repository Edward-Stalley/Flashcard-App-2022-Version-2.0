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
    <div className="h-screen bg-bl-1  ">
      <div className="dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1  relative grid    ">
        <Navbar />

        <div className="">
          <Header pageHeader="Select Week" subHeader={""} />
          <div
            className="
  bg-bl-1 
dark:bg-bd-1
p-20
gap-5 flex flex-col items-center justify-start
sm:items-center sm:justify-center mobile:justify-start
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
    </div>
  );
}

export default ProductDetail;

{
}
