import { useRouter } from "next/router";
import WeekComponent from "../../../../components/WeekComponent";
import HomeButton from "../../../../components/HomeButton";
import ToggleButton from "../../../../components/ToggleButton";
import Header from "../../../../components/Header";
import ClassComponent from "../../../../components/ClassComponent";

function ProductDetail() {
  const router = useRouter();
  const { params = [] } = router.query;
  // const productId = router.query.productId;
  const yearId = router.query.yearId;
  const weekId = router.query.weekId;

  // const reviewId = router.query.reviewId;
  console.log(yearId, weekId);

  const classArray = ["Listening Kiso", "Listening Shokyu"];
  const classList = classArray.map((week, i) => {
    return (
      <ClassComponent key={"class" + yearId + weekId + (i + 1)} year={yearId} week={weekId} class={classArray[i]} />
    );
  });

  return (
    <div>
      <div>
        <Header pageHeader="Select Your Class" />
        <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-4 ">
          <HomeButton />
          <ToggleButton />
        </div>
        <div className="bg-slate-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
          <div className="bg-slate-400 dark:bg-bd-2   p-5 grid items-center justify-center ">{classList}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
