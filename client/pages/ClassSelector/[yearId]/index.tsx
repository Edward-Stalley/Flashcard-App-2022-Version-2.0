import { useRouter } from "next/router";
import Link from "next/link";
import WeekComponent from "../../../Components/WeekComponent";
import HomeButton from "../../../Components/HomeButton";
import ToggleButton from "../../../Components/ToggleButton";
import Header from "../../../Components/Header";
import React from "react";

function ProductDetail() {
  const router = useRouter();
  const { params = [] } = router.query;
  const yearId = router.query.yearId;

  const array = Array(44).fill("");
  const weekList = array.map((week, i) => {
    return <WeekComponent key={"week" + { yearId } + (i + 1)} year={yearId} week={i + 1} />;
  });

  // console.log(weekList);
  // console.log(params);
  console.log(yearId);

  return (
    <div>
      <div>
        <Header pageHeader="Select Your Class" />
        <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-4 ">
          <HomeButton />
          <ToggleButton />
        </div>
        <div
          className="
        dark:bg-bd-1
        p-20
      bg-slate-200 gap-5 flex flex-col items-center justify-center 
      sm:items-center sm:justify-center
      sm:grid
      sm:grid-cols-2
      md:grid 
      md:grid-cols-3 
      lg:grid-cols-4
       "
        >
          {weekList}
          {/* <div className="flex items-center justify-center "></div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
