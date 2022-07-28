import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid #E8A634;
    width: 359px;
    height: 88px;
    font-style: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    
    .ingredient-data{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }

    .ingredient-name{
        width: 243.16px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #4E4E4E;
    }
    
    .ingredient-price{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #F09035;
    }

    .ingredient-qtd{
        width: 89px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        background: #FFFFFF;
        border: 1px solid #F09035;
        border-radius: 5px;

        .ingredient-buttons{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            box-sizing: border-box;
            padding: 4px;

            button{
                background: transparent;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            svg{
                color: #D80000;
            }

            input{
                width: 25px;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                color: #4E4E4E;
                border: none;
                text-align: center;
            }
        }

    }
`;