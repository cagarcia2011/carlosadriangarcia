/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "992px",
        xl: "1280px"
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      robotoSlab: ["Roboto Slab", "serif"],
    },
    fontSize: {
      xs: ".75rem", // 12px
      xtiny: ".8125rem", // 13px
      tiny: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", // 24px
      "4xl": "1.5625rem", // 25px
      "5xl": "1.625rem", // 26px
      "6xl": "1.75rem", // 28px
      "7xl": "2.5rem", // 40px
      "8xl": "6rem", // 40px
    },
    extend: {
      screens: {
        'socialSm': "1480px",
      },
      dropShadow: {
        'white': '0 0px 5px rgba(255, 255, 255, 0.15)',
        'black': '0 0px 5px rgba(0, 0, 0, 0.15)'
      },
      colors: {
        'primary-bg-dark': '#2b2b2b',
        'primary-bg-light': '#F3F6F6',
        "variant-bg": "#22b8cf",
        "primary-color": "#fff",
        "accent-color": "#56b0bc",
        "accent-light": "#EEF5FA",
        "color-light": "#c7d4ee",
        "shadow-light": 'rgba(255, 255, 255, 0.15)',
        "shadow-dark": 'rgba(0, 0, 0, 0.15)',
        transparent: 'transparent',
        gray: "#F3F6F6",
        "gray-lite": "#44566C",
        oriange: "#E93B81",
        green: "#6AB5B9",
        "color-50": "#C17CEB",
        "color-100": "#FCF4FF",
        "color-200": "#D566FF",
        "color-300": "#FFF4F4",
        "color-400": "#FF6080",
        "color-500": "#F3FAFF",
        "color-600": "#269FFF",
        "color-700": "#FEFAF0",
        "color-800": "#DDA10C",
        "color-810": "#F8FBFB",
        "color-820": "#8774FF",
        "color-830": "#FF75D8",
        "color-840": "#FF6786",
        "color-910": "#A6A6A6",
        "color-920": "#1D1D1D",
        "color-930": "#FF6464",
        "color-940": "#9272D4",
        "color-950": "#5185D4",
        "color-960": "#CA56F2",
        "color-970": "#1C1C1C",
        "color-980": "#0D0D0D",
        "color-990": "#212425",
      },
      boxShadow: {
        icon: "0 4px 6px 0px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        textFadeIn: 'textFadeIn 400ms ease-in',
        textFadeOut: 'textFadeOut 400ms ease-in',
        wiggle: 'wiggle 1s ease infinite', 
        'spin-slow': 'spin 6s linear infinite',
        'ping-slow': 'ping 6s linear infinite',
      },
      keyframes: {
        textFadeIn: {
          '0%': { opacity: '0%' },
          '75%': { opacity: '0%' },
          '100%': { opacity: '100%' }
        },
        textFadeOut: {
          '0%': { opacity: '100%' },
          '20%': { opacity: '0%' },
          '100%': { opacity: '0%' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      }
    },

  },
  plugins: [],
}
