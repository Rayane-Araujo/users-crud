import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #F3F3F3;
        font-family: 'Manrope', sans-serif;
        overflow: hidden;
    }
`;

export default  MyGlobalStyles;