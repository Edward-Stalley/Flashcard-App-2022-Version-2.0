import Link from "next/link";

export default function Year(props: any) {
  const firstYearHalf = props.year.slice(0, -4);
  const secondYearHalf = parseFloat(props.year.slice(0, -4)) + 1;

  return (
    <Link
      className="hover:bg-blue-300/75 bg-blue-200 dark:hover:bg-zinc-700 dark:bg-bd-1 dark:text-td-1   w-56 h-16 p-5 rounded flex items-center m-1 justify-center"
      href={`ClassSelector/${props.year}`}
    >
      Year {firstYearHalf} - {secondYearHalf}
    </Link>
  );
}
