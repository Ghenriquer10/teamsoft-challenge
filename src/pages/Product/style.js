import styled from "styled-components";

export const Container = styled.main`
    width: 1280px;
    height: 710px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 10px;
    border: 1px solid red;
    font-family: 'Roboto';
    font-style: normal;
`;

export const ProductAbout = styled.section`
    border: 1px solid red;
    width: 597px;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .product-photo{
        img{
            width: 597px;
            height: 388px;
        }
    }

    .product-name{
        width: 528.56px;
        height: 91.59px;
        font-weight: 500;
        font-size: 28px;
        line-height: 100%;
        display: flex;
        align-items: center;
        color: #4E4E4E;
    }

    .product-details{
        width: 597px;
        height: 65.17px;
        font-weight: 400;
        font-size: 20px;
        line-height: 120%;
        color: #4E4E4E;
    }

    .product-price{
        display: flex;
        flex-direction: row;

        p{
            width: 116px;
            height: 38px;
            font-weight: 400;
            font-size: 32px;
            line-height: 120%;
            margin-right: 10px;
        }

        p:first-child{
            color: #DC6E05;
        }
    }
`;

export const ProductIngredient = styled.aside`
    border: 1px solid red;
    width: 427px;
    height: 650px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

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

    .add-item{
        width: 359px;
        height: 88px;
        border: 1px solid red;
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