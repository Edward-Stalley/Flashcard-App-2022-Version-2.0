/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mobile: { min: "200px", max: "400px" },
      },
      colors: {
        // Need to add custom colors here to make changing the color scheme easier
        //    LIGHT SCHEME
        "bl-1": "var(--primary-bg-light)",
        //    DARK SCHEME
        // background
        "bd-1": "var(--primary-bg-dark)",
        "bd-2": "var(--secondary-bg-dark)",
        //    text
        "td-1": "var(  --primary-text-dark)",
        "td-2": "var(  --secondary-text-dark)",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};

// /* slate 300 */
// --primary-bg-light: #cbd5e1;
// /* slate 800*/
// --primary-text-light: #1e293b;

// /* light mode */

// /* slate 800 */
// --primary-bg-dark: #1e293b;

// /* slate 600 */
// --third-bg-dark: #475569;
// /* slate 200 */
// --secondary-bg-dark: #e2e8f0;
// /* slate 100 */
