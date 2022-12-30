import { useRouter } from "next/router";
import WeekComponent from "../../../../Components/WeekComponent";
import HomeButton from "../../../../Components/HomeButton";
import ToggleButton from "../../../../Components/ToggleButton";
import Header from "../../../../Components/Header";
import ClassComponent from "../../../../Components/ClassComponent";

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
    <div>
      <div>
        <Header pageHeader="Select Your Class" subHeader={""} />
        <div className="flex items-center   justify-between bg-blue-200 dark:bg-bd-1 ">
          <HomeButton />
          <ToggleButton />
        </div>
        <div className="bg-blue-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1   ">
          <div className=" bg-blue-100 dark:bg-bd-2 p-5 grid items-center justify-center rounded ">{classList}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
