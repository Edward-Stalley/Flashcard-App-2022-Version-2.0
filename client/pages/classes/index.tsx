import Link from "next/link";

export default function Classes() {
  return (
    <div>
      {/* need to fetch names based on the database classes - dynamically */}
      <Link
        className="bg-pink-300 hover:bg-pink-400 h-fit w-64 p-5 rounded flex items-center m-2 justify-center"
        href="/Classes/listening_kiso"
      >
        Listening Kiso
      </Link>
      <Link
        className="bg-pink-300  hover:bg-pink-400 h-fit w-64 p-5 rounded flex items-center  m-2 justify-center"
        href="/Classes/listening_shokyu"
      >
        Listening Shokyu
      </Link>
      {/* <Link
        className="bg-pink-300  hover:bg-pink-400 hover:bg-pink-400h-fit w-64 p-5 rounded flex items-center m-2 justify-center"
        href="/classes/skills_chukyu"
      >
        Skills Chukyu
      </Link> */}
    </div>
  );
}
