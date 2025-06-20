/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // ✅ Scans all files for Tailwind classes
  theme: {
    extend: {}, // ✅ You can add custom colors, spacing, fonts here
  },
  plugins: [], // ✅ You can add official plugins like `@tailwindcss/forms` here
};
