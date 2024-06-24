import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",

    "&::-webkit-scrollbar": {
      width: "8px", // width of the scrollbar
    },

    "&::-webkit-scrollbar-track": {
      background: "$gray700", 
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "$gray500", 
      borderRadius: "10px",
      "&:hover": {
        background: "$gray400",
      },
    },
  },
});
