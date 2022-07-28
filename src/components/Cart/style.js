import styled from "styled-components";

export const Container = styled.div`
    width: 208px;
    height: 146px;
    font-family: 'Roboto Condensed';

    .title{
        width: 208px;
        height: 32px;
        background: #F09035;
        border-radius: 4px 4px 0px 0px; 
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .product-data{
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;
        color: #4E4E4E;
        padding: 0 11px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        
        .product-title{
            margin: 8px 0;
            font-weight: 700;
            font-size: 14px;
            line-height: 100%;
            color: #BC2E31;
            
        }
        
        .ingredient{
            font-weight: 700;
            font-size: 12px;
            line-height: 100%;
            color: #4E4E4E;
        }

        li{
            margin: 4px 0 4px 15px;
        }
    }
`;