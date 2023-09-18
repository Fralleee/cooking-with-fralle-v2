/** @type {import('tailwindcss').Config} */
const { keyframes } = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        header: "repeating-linear-gradient(to right, #99d2db, #99d2db 3rem, #90c7d0 3rem, #90c7d0 6rem)",
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        gradient: {
          "0%": { "background-position": "0 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0 50%" },
        },
        animateUp: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "animate-scale": {
          "0%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scale: "animate-scale 200ms ease-out",
        title: "gradient 5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite, animateUp 600ms 50ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      backgroundColor: {
        cozy: "#ff8570",
      },
      gradientColorStops: {
        "cozy-start": "#ff8570",
        "cozy-end": "#ff8bf3",
      },
      transitionProperty: {
        link: "box-shadow, transform",
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
