import Link from "next/link";
export default function HomeButton() {
  return (
    <div className=" bg-slate-200  bg-primary-light dark:bg-bd-1 flex justify-end p-4 ">
      <Link className="bg-slate-100 p-5 m-5 mb-10 rounded" href="/">
        Home
      </Link>
    </div>
  );
}
