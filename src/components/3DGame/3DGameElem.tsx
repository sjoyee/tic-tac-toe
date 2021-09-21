import styled from 'styled-components';

type LayoutProps = {
    gap: number,
}

export const Row = styled.div<LayoutProps>`
    display: flex;
    flex-direction: row;
    gap: ${(props) => props.gap}px;
`

export const Column = styled.div<LayoutProps>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap}px;
`

export const GameContainer = styled.div `
    height: 100%;
    width: 100%;
    padding: 30px 20px;
`