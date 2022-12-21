import { useContext } from "react";
import MyThemeContext from "../store/myThemeContext";

export default function ToggleButton() {
  // Theme
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  return (
    <div className="bg-slate-200 dark:bg-bd-1 flex justify-end p-4 ">
      <button
        type="button"
        className=" w-32 h-16 bg-blue-200 text-slate-800 dark:bg-zinc-200 dark:text-black rounded   "
        onClick={toggleThemeHandler}
      >
        Toggle Theme
      </button>
    </div>
  );
}
