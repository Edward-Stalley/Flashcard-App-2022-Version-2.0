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

  console.log(yearId);

  return (
    <>
      <div className="dark:bg-gray-800  bg-bl-1 text-bd-1 dark:text-bl-1 grid  ">
        <div>
          <Navbar />
          <Header pageHeader="Select Week" subHeader={""} />
        </div>
        <div className=" p-5 gap-4 flex h-screen justify-center col-span-full dark:bg-bd-1 bg-bl-1 ">{weekList}</div>
      </div>
    </>
  );
}

export default ProductDetail;
