import { useRouter } from "next/router";
import WeekComponent from "../../../../Components/WeekComponent";
import HomeButton from "../../../../Components/HomeButton";
import ToggleButton from "../../../../Components/ToggleButton";
import Header from "../../../../Components/Header";
import ClassComponent from "../../../../Components/ClassComponent";
import Navbar from "../../../../Components/Navbar";
import { useState } from "react";

// Stop auto formatting this file to make class commenting easier
// prettier-ignore

function ProductDetail() {
  const router = useRouter();
  const { params = [] } = router.query;

  const yearId = router.query.yearId;
  const weekId = router.query.weekId;

  const classArray = ["Listening Kiso", "Listening Shokyu", "Business 上級"];
  const currentWeek = "41";
  const classList = classArray.map((week, i) => {
    return (
      <ClassComponent
        // Set Class To Ready
        // commented out  means class is not ready (red)

        ready={
          (weekId === currentWeek && classArray[i] === "Listening Kiso")
          
          // || (weekId === currentWeek && classArray[i] === "Listening Shokyu")
           
          // || (weekId === currentWeek && classArray[i] === "Business 上級")

          
            ? true
            : false
        }
        //
        key={"class" + yearId + weekId + (i + 1)}
        year={yearId}
        week={weekId}
        class={classArray[i]}
      />
    );
  });

  return (
    <div className="  dark:bg-gray-800 bg-bl-1 text-bd-1 dark:text-bl-1  h-full relative grid  ">
      <div>
        <Navbar />
        <Header pageHeader="Select Class" subHeader={""} />
        <div className=" flex  h-screen bg-bl-1 gap-4 items-center p-5 flex-col dark:bg-bd-1  ">{classList}</div>
      </div>
    </div>
  );
}

export default ProductDetail;
