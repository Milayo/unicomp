import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
    font-family: ${(props) => props.theme.font.fontFamily1}
    }

    a {
		text-decoration: none;
		color: black;
	}


    html {
    box-sizing: border-box;
    font-size: 62.5%; 
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

`;
