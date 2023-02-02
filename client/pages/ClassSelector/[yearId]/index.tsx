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

  const array = yearId === "20222023" ? Array(8).fill("") : Array(48).fill("");

  const weekList = array.map((week, i) => {
    return (
      <WeekComponent key={"week" + { yearId } + (i + 1)} year={yearId} week={yearId === "20222023" ? i + 41 : i + 1} />
    );
  });

  const checkYear = function () {};

  console.log(yearId);

  return (
    <>
      <div className="dark:bg-gray-800  bg-bl-1 text-bd-1 dark:text-bl-1 grid  ">
        <div>
          <Navbar />
          <Header pageHeader="Select Week" subHeader={""} />
        </div>
        <div className=" min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
          <div className=" dark:bg-bd-1 rounded  p-5 gap-2 grid mobile:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 items-center justify-center ">
            {weekList}
          </div>
        </div>
        {/* <div className=" p-5 gap-4 flex h-screen justify-center col-span-full dark:bg-bd-1 bg-bl-1 ">{weekList}</div> */}
      </div>
    </>
  );
}

export default ProductDetail;
