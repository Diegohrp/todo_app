import { createGlobalStyle } from "styled-components";
const titlesFont = "'Ubuntu', sans-serif";
const textFont = "'Inter', sans-serif";
const primaryColor = "#673AB7";
const darkPrimaryColor = "#512DA8";
const accentColor = "#00BCD4";
const textColor = "#212121";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  #root{
    display: grid;
    width: 100vw;
    height: 100vh;
    place-items: center;
    font-family: ${textFont};
    background: rgb(103,58,183);
    background: linear-gradient(0deg, rgba(103,58,183,0.49343487394957986) 38%, rgba(0,188,212,0.4822303921568627) 100%);
    
    @media (min-width:700px) {
      grid-template-columns: 1fr 1fr;
      padding: 0px 30px; 
    }
  }
`;

export {
	GlobalStyle,
	titlesFont,
	textFont,
	primaryColor,
	darkPrimaryColor,
	textColor,
	accentColor,
};
