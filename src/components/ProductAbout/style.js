import styled from "styled-components";

export const ProductAbout = styled.section`
    width: 597px;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;   
    
    h1{
        margin: 0 auto;
    }

    @media (min-width: 320px) and (max-width: 768px) {
        height: 100%;
        width: 100%;
        padding: 16px;
        justify-content: center;
        gap: 10px;
    }
    .product-photo{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 597px;
            height: 388px;
            @media (min-width: 320px) and (max-width: 768px) {
                width: 343px;
                height: 230.96px;
            }
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
        @media (min-width: 320px) and (max-width: 768px) {
            height: 38px;
            width: 100%;
            font-size: 18px;
            line-height: 16px;
        }
    }
    
    .product-details{
        font-weight: 400;
        font-size: 20px;
        line-height: 120%;
        color: #4E4E4E;
        @media (min-width: 320px) and (max-width: 768px) {
            width: 100%;
            font-size: 16px;
            line-height: 20px;
        }
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
            @media (min-width: 320px) and (max-width: 768px) {
                width: 64px;
                font-size: 14px;
                line-height: 16px;
            }
        }

        p:first-child{
            color: #DC6E05;
        }

        p:last-child{
            text-decoration: line-through;
        }
    }
`;