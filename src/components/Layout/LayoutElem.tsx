import styled from "styled-components";

export const Colour = {
    boardColour: "#152D35",
    cellColour: "#D4ECDD",
    cellWinColour: "#345B63",
    titleColour: "#112031",
}

export const LayoutButton = styled.button`
    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const LayoutCard = styled.div`
    background: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px 200px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    font-size: 24px;
    font-weight: bold;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }   
`