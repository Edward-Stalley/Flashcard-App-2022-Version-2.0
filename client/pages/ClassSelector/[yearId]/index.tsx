import { useRouter } from "next/router";
import Link from "next/link";
import WeekComponent from "../../../Components/WeekComponent";
import HomeButton from "../../../Components/HomeButton";
import ToggleButton from "../../../Components/ToggleButton";
import Header from "../../../Components/Header";

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
        <div className="bg-slate-200  min-h-screen  items-center p-5 flex-col flex dark:bg-bd-1  ">
          <div className="bg-slate-400 dark:bg-bd-2   p-5 grid items-center justify-center ">{weekList}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
