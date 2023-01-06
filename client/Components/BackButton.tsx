import { useState } from "react";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className=" flex ease-in justify-start items-center  rounded-full cursor-pointer"
    >
      <svg
        className="back_button "
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        // fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.461 11.9994C2.46129 11.5852 2.79731 11.2497 3.21153 11.25L21.0005 11.2625C21.4147 11.2628 21.7502 11.5988 21.7499 12.013C21.7497 12.4272 21.4136 12.7628 20.9994 12.7625L3.21047 12.75C2.79626 12.7497 2.46071 12.4137 2.461 11.9994Z"
          //   fill="orange"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5174 4.4692C10.8105 4.76183 10.8109 5.2367 10.5183 5.52986L4.05971 12L10.5183 18.4701C10.8109 18.7633 10.8105 19.2382 10.5174 19.5308C10.2242 19.8234 9.74934 19.823 9.45671 19.5299L2.4692 12.5299C2.17693 12.2371 2.17693 11.7629 2.4692 11.4701L9.45671 4.47014C9.74934 4.17699 10.2242 4.17657 10.5174 4.4692Z"
          //   fill="orange"
        />
      </svg>
    </div>
  );
}
