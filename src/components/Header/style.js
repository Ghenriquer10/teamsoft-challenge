import styled from "styled-components";

export const Container = styled.header`
    width: 1280px;
    height: 80px;
    background: #F4F4F4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 40px;
    gap: 24px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

export const Logo = styled.div`
    
`;

export const StreetField = styled.div`
    select{
        width: 230px;
        height: 48px;
        background: #FFFFFF;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        border: none;
    }
`;

export const SearhField = styled.div`
    .search-item{
        width: 354px;
        height: 48px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #ED3237;
        border-radius: 4px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 10px;
        padding-left: 16.25px;
        padding-right: 18.75px;
        letter-spacing: 0.33px;
    }
`;

export const Buttons = styled.div`
    height: 48px;
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    
    button{
        border: none;
        width: 100%;
        
        svg{
            width: 26.67px;
            height: 26.67px;
            margin: 0 5px;
        }
        
    }
    
    .login, .shoppcart{
        margin: 0 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #ED3237;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: 0.2px;
        font-weight: 400;
        font-family: roboto;
    }

`;