import styled from "styled-components";

export const ProductAbout = styled.section`
    width: 597px;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;   

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