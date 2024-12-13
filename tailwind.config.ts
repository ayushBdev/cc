import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";
import { nextui } from "@nextui-org/react";

export default withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
		fontFamily: {
			inter: ["var(--font-inter)"],
			poppins: ["var(--font-poppins)"],
		},
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
				primary: "#024EF3",
      },
			gap: {
				2.5: "0.625rem",
			},
			padding: {
				1.5: "0.375rem",
				3.5: "0.875rem",
			},
			fontSize: {
				"xss": "0.625rem",
				"xsS": "0.6875rem",
				"xSm": "0.8125rem",
			}
    },
  },
  plugins: [
		require("tailwindcss-animate"),
		nextui(),
	],
}) satisfies Config;
