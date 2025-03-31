/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			backgroundImage: {
				header:
					"repeating-linear-gradient(to right, transparent, transparent 3rem, #11223320 3rem, #11223320 6rem)",
			},
			backgroundSize: {
				full: "300%",
			},
			boxShadow: {
				plain: "4px 6px 0 3px rgba(0,0,0,.05)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			animation: {
				hero: "animateUpRotate 600ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
				title:
					"animateUpRotate 450ms cubic-bezier(.34,1.31,.64,1) forwards, gradientRoll 4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
			},
			backgroundColor: {
				cozy: "#ff8570",
			},
			transitionTimingFunction: {
				InOutQuadratic: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
				OutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
				OutBackLarge: "cubic-bezier(0.175, 0.885, 0.405, 1.57)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
