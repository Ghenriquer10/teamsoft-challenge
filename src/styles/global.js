import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
}

body, htlm, #root{
    font-family: sans-serif;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
}

button{
    cursor: pointer;
}

`;