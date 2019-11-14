import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"

// lodash.merge will deeply merge custom values with the
// blog theme's defaults
export default merge({}, baseTheme, {
  colors: {
    text: "#222",
    primary: "tomato",
    fontFamily: "roboto",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      // the style object for each element
      // can reference other values in the theme
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
    },
    a: {
      color: "primary",
      ":hover, :focus": {
        color: "secondary",
      },
      textDecoration: "none",
      fontWeight: "heading",
    },
    // more styles can be added as needed
  },
})
