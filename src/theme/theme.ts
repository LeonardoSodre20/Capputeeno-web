import { createGlobalStyle } from "styled-components";

import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100dvh;
        width: 100%;
        font-family: ${saira.style.fontFamily};
        background-color: #F0F0F5;
        overflow-x: hidden;
    }
`;
