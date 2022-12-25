import Link from "next/link";

export default function Week(props: any) {
  const week = props.week;
  console.log(typeof week, typeof props.year);

  return (
    <div className="hover:bg-blue-100 bg-blue-200 dark:bg-bd-1 dark:text-td-1  h-fit w-64 p-5 rounded flex items-center m-1 justify-center">
      <Link href={`/ClassSelector/${props.year}/${week}`}>Week {props.week} </Link>
    </div>
  );
}
