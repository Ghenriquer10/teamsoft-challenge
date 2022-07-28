import styled from "styled-components";

export const ProductIngredient = styled.aside`
    border: 1px solid #686868;
    width: 427px;
    height: 650px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    padding: 26px;
    border-radius: 10px;

    .ingredient-label, .add-cutlery{
        width: 375px;
        height: 55px;
        background: rgba(253, 215, 14, 0.2);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 16px;
        
        p:first-child{
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
        }

        p:last-child{
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #E49700;
        }
    }

    .add-cutlery{
        p:first-child{
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
        }
    }
`;

export const AddIngredient = styled.div`
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

export const SendIngredient = styled.div`

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 16px;

    .qtd-cutlery{
        width: 140px;
        height: 40px;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 13px;
        flex-direction: row;
        background: #FFFFFF;
        border: 1px solid #F09035;
        border-radius: 4px;


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

    .add-ingredient{
        button{
            width: 219px;
            height: 40px;
            background: #F09035;
            border-radius: 4px;
            border: none;
            font-size: 14px;
            line-height: 10px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            letter-spacing: 0.33px;
            color: #FFFFFF;
        }
    }

`;

