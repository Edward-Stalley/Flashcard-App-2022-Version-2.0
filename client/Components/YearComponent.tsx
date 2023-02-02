import Link from "next/link";

export default function Year(props: any) {
  // Correctly Format the Year
  const firstYearHalf = props.year.slice(0, -4);
  const secondYearHalf = parseFloat(props.year.slice(0, -4)) + 1;

  return (
    <Link
      className="nav_button bg-but-d dark:text-bd-1  w-56 h-16  p-5 rounded-full flex items-center m-1 justify-center"
      href={`ClassSelector/${props.year}`}
    >
      Year {firstYearHalf} - {secondYearHalf}
    </Link>
  );
}
