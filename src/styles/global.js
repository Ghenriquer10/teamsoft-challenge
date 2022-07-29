import {createGlobalStyle} from 'styled-components';

// Estilo Global da aplicação

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

#root{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
}

button{
    cursor: pointer;
}

`;