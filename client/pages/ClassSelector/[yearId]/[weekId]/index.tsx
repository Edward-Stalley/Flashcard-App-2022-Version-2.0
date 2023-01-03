import { useRouter } from "next/router";
import WeekComponent from "../../../../Components/WeekComponent";
import HomeButton from "../../../../Components/HomeButton";
import ToggleButton from "../../../../Components/ToggleButton";
import Header from "../../../../Components/Header";
import ClassComponent from "../../../../Components/ClassComponent";
import Navbar from "../../../../Components/Navbar";

function ProductDetail() {
  const router = useRouter();
  const { params = [] } = router.query;
  // const productId = router.query.productId;
  const yearId = router.query.yearId;
  const weekId = router.query.weekId;

  // const reviewId = router.query.reviewId;
  // console.log(yearId, weekId);

  const classArray = ["Listening Kiso", "Listening Shokyu"];
  const classList = classArray.map((week, i) => {
    return (
      <ClassComponent key={"class" + yearId + weekId + (i + 1)} year={yearId} week={weekId} class={classArray[i]} />
    );
  });

  return (
    <div
      className="  h-fit w-fit   bg-bl-1 
    dark:bg-bd-1 pb-20  "
    >
      <div>
        <Navbar />
        <Header pageHeader="Select Class" subHeader={""} />
        <div className="flex items-center  justify-between dark:bg-bd-1 ">
          {/* <HomeButton /> */}
          {/* <ToggleButton /> */}
        </div>
        <div className="bg-bl-1  gap-4  items-center p-5 flex-col flex dark:bg-bd-1   ">
          {classList}
          {/* <div className=" bg-bl-1 dark:bg-bd-1 p-5 grid items-center justify-center rounded "></div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
