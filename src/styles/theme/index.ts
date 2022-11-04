import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    bp1: "(min-width: 425px)",
    bp2: "(min-width: 768px)",
  },

  theme: {
    colors: {
      "base-title": "#272221",
      "base-subtitle": "#403937",
      "base-text": "#574F4D",
      "base-label": "#8D8686",
      "base-hover": "#D7D5D5",
      "base-button": "#E6E5E5",
      "base-input": "#EDEDED",
      "base-card": "#F3F2F2",
      "base-background": "#FAFAFA",
      "base-white": "#FFFFFF",

      "brand-purple": "#8047F8",
      "brand-purple-dark": "#4B2995",
      "brand-purple-light": "#EBE5F9",

      "brand-yellow": "#DBAC2C",
      "brand-yellow-light": "#F1E9C9",
      "brand-yellow-dark": "#C47F17",
    },
    fontSizes: {
      "title-title-xl": "3rem",
      "title-title-l": "2rem",
      "title-title-m": "1.5rem",
      "title-title-s": "1.25rem",
      "title-title-xs": "1.125rem",

      "text-regular-l": "1.25rem",
      "text-bold-l": "1.25rem",
      "text-regular-m": "1rem",
      "text-bold-m": "1rem",
      "text-regular-s": "0.875rem",
      "text-bold-s": "0.75rem",

      "component-tag": "0.625rem",
      "component-button-g": "0.875rem",
      "component-button-s": "0.75rem",
    },
    fonts: {
      regular: "'Roboto'",
      title: "'Baloo 2'",
    }
  },
});
