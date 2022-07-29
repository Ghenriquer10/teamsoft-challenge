import styled from "styled-components";

export const Container = styled.main`
    width: 1280px;
    height: 710px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 10px;
    font-family: 'Roboto';
    font-style: normal;

    @media (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        height: 100%;
        width: 100%;
        gap: 0;
    }

    .animated{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 1.5;
    }
`;
