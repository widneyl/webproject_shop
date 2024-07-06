import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: sans-seref;

}

body{
    width: 100vh;
    heigth: 100vh;
    display: flex;
    justify-content: center;
    bacground-color: #f2f2f2;
}

`;

export default Global;