import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  padding: 50px;
  background-color: rgb(138, 138, 138);
  
}

.App{
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul, li {
  list-style: none;
}

button {
  background-color: transparent;
  border: none;
}

`;

export default GlobalStyles;
