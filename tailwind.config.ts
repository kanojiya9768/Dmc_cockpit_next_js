import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2e023c",
        "light-primary-color": "#645569",
        "violet-light-color": "#42264b",
        "dark-violet-color": "#363636",
        "green-color": "#2ed789",
        "very-light-violet-color": "#f7f7ff",
        "light-input-color": "#f8f9fb",
        "grey-color": "#b8c1cb",
        "dark-grey-color": "#798491",
        "light-dark-grey-color": "#f3f4f6",
        "yellow-color": "#ffd44e",
        "very-light-grey-color": "#f5f5f5",
        "dark-yellow-color": "#f8ca20",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "linear-gradient-green-to-blue":
          "linear-gradient(90deg, rgba(45, 205, 131, 1) 25%, rgba(45, 205, 131, 1) 28%, rgba(54, 66, 87, 1) 68%)",
        "linear-gradient-blue-to-green":
          "linear-gradient(90deg, rgba(46, 9, 62, 1) 0%, rgba(46, 71, 85, 1) 35%, rgba(46, 160, 117, 1) 100%)",
        "linear-gradient-yellow":
          "linear-gradient(90deg, rgba(250, 210, 7, 1) 27%, rgba(238, 145, 14, 1) 72%)",
        "linear-gredient-light-green-to-dark":
          "linear-gradient(91deg, #2DD387 0%, #176A44 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
