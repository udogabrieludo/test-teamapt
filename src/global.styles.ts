import { createGlobalStyle } from "styled-components";
import { Color } from "./assets/theme";


export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:${Color.default};
  overflow-x: hidden;
 
}
h1,h2,h3,h4,h5,h6{
margin:0;
padding:2px;
}
p{
  line-height: 1.5;
  margin:0;
  padding:2px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`