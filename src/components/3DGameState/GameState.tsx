import { useState } from "react";

export type Value = 'X' | 'O' | null;

export type BoardState = Value[];

export type GameState = {
    history: BoardState[],
    step: number
}

const createEmptyBoard = () => {
    return (Array<Value>(9).fill(null));
}

export const checkWin = (boardState: BoardState) => {
    const winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winCombination.length; i++) {
        const [a, b, c] = winCombination[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return {
                winner: boardState[a], 
                winIndex: [a,b,c]
            };
        }
    }
    return null;
};

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>(
        {
            history: [createEmptyBoard()],
            step: 0,
        }
    )
    const current = gameState.history[gameState.step];
    const isNext = (gameState.step % 2) === 0;
    const winner = checkWin(current)?.winner ?? null;
    const winIndex = checkWin(current)?.winIndex ?? null;

    const handleClick = (box: number) => {
        const history = gameState.history.slice(0, gameState.step + 1)
        const boardState = history[history.length - 1];

        if (checkWin(boardState)?.winner || boardState[box]) {
            return;
        }
        const newBoardState = boardState.slice();
        newBoardState[box] = (gameState.step % 2) === 0 ? 'X' : 'O';

        history.push(newBoardState);

        setGameState({
            history: history,
            step: history.length - 1
        })
    };

    const jumpBack = (step: number) => {
        setGameState({
            history: gameState.history,
            step,
        })
    };

    return {
        gameState,
        current,
        isNext,
        winner,
        winIndex,
        handleClick,
        jumpBack
    };
};

