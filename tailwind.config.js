/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "surface-container": "#f5ecec",
              "on-primary-container": "#fff0ee",
              "surface-container-high": "#efe6e6",
              "on-secondary": "#ffffff",
              "tertiary-fixed-dim": "#96cfe5",
              "on-primary-fixed-variant": "#930007",
              "outline-variant": "#e7bdb7",
              "background": "#fff8f7",
              "surface-bright": "#fff8f7",
              "on-secondary-container": "#306c6a",
              "secondary-container": "#afebe7",
              "on-secondary-fixed": "#00201f",
              "on-error": "#ffffff",
              "primary": "#b2000a",
              "error-container": "#ffdad6",
              "surface-container-lowest": "#ffffff",
              "on-secondary-fixed-variant": "#0a4f4d",
              "on-primary-fixed": "#410001",
              "surface-dim": "#e0d8d8",
              "primary-container": "#db1a1a",
              "inverse-on-surface": "#f8efef",
              "tertiary-fixed": "#b6ebff",
              "outline": "#926f6a",
              "surface-tint": "#c0000c",
              "on-tertiary-container": "#e2f6ff",
              "primary-fixed": "#ffdad5",
              "on-tertiary": "#ffffff",
              "surface-variant": "#e9e0e1",
              "inverse-primary": "#ffb4aa",
              "surface-container-highest": "#e9e0e1",
              "primary-fixed-dim": "#ffb4aa",
              "tertiary": "#1f5d70",
              "inverse-surface": "#342f30",
              "on-background": "#1e1b1b",
              "on-surface": "#1e1b1b",
              "secondary": "#2b6765",
              "on-primary": "#ffffff",
              "on-error-container": "#93000a",
              "secondary-fixed": "#b2eeea",
              "on-surface-variant": "#5d3f3b",
              "error": "#ba1a1a",
              "secondary-fixed-dim": "#96d1ce",
              "surface": "#fff8f7",
              "on-tertiary-fixed-variant": "#034e60",
              "tertiary-container": "#3c7689",
              "surface-container-low": "#faf2f2",
              "on-tertiary-fixed": "#001f28"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
          "spacing": {
              "gutter": "24px",
              "base": "8px",
              "container-max": "1280px",
              "margin": "32px"
          },
          "fontFamily": {
              "headline-lg": ["Outfit", "sans-serif"],
              "body-lg": ["Inter", "sans-serif"],
              "headline-lg-mobile": ["Outfit", "sans-serif"],
              "headline-md": ["Outfit", "sans-serif"],
              "label-bold": ["Inter", "sans-serif"],
              "display-xl": ["Outfit", "sans-serif"],
              "body-md": ["Inter", "sans-serif"]
          },
          "fontSize": {
              "headline-lg": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
              "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
              "headline-lg-mobile": ["28px", {"lineHeight": "1.2", "fontWeight": "700"}],
              "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
              "label-bold": ["14px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
              "display-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
              "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}]
          }
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
