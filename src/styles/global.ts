import { globalCss } from "../styles/theme";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },

  ':focus': {
    outline: 0
  },

  body: {
    background: "$base-background",
    color: '$base-text',
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "$regular",
    fontWeight: 400,
    fontSize: '$text-regular-m'
  },

  button: {
    cursor: 'pointer'
  },

  a: {
    textDecoration: 'none'
  },

  input: {
    '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },

    "input[type='number']": {
      '-moz-appearance': 'textfield'
    }
  }
});
