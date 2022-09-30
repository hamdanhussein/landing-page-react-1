import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Reem Kufi Fun', sans-serif;
 }

li {
      list-style-type:none;
}

body {
      color:#0b132b;
}

.active {
      border-bottom: solid 3px #850e35;
}

`

export default GlobalStyle; 