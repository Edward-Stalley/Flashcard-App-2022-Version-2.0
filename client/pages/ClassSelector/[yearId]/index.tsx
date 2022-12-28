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
        <Header pageHeader="Select The Week" subHeader={""} />
        <div className="flex items-center  justify-between bg-blue-200 dark:bg-bd-1 ">
          <HomeButton />
          <ToggleButton />
        </div>
        <div
          className="
        dark:bg-bd-1
        bg-blue-200
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
          {/* <div className="bg-blue-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  "> */}
          {/* <div className="bg-blue-100 dark:bg-bd-2   p-5 grid items-center justify-center rounded "> </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
