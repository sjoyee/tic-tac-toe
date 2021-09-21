import { useRef } from 'react'
import { BoardState } from "../3DGameState/GameState";
import PlayerO from './PlayerO';
import PlayerX from './PlayerX';
import { Colour } from '../Layout/LayoutElem';

type CellProps = {
    position: [number, number, number],
    id: number,
    onClick: (cellIndex: number) => void,
    board: BoardState,
    hasWon: boolean,
    winIndex: number[] | null,
};

const Cell = ({ position, id, onClick, board, hasWon, winIndex }: CellProps) => {
    const winIds = winIndex ? winIndex : [10, 10 ,10]
    const isWinId = winIds.includes(id);
    const colour = hasWon && isWinId ? Colour.cellWinColour : Colour.cellColour;
    

    const cellValue = board[id] ? (
        board[id] === 'X' ? (
            <PlayerX position={position} colour={colour} isWinId={isWinId}/>
        ) : (
            <PlayerO position={position} colour={colour} isWinId={isWinId}/>
        )
    ) : null;

    const handleClick = () => {onClick(id)};

    
    const group = useRef<THREE.Group>();
    const mesh = useRef<THREE.Mesh>();

    return (
        <group ref={group} onPointerUp={handleClick}>
            <mesh ref={mesh} position={position} position-z={2} receiveShadow castShadow>
                <planeBufferGeometry args={[3.5, 3.5, 1]} />
                <meshStandardMaterial
                    transparent
                    opacity={0}
                />
            </mesh>
            {cellValue}
        </group>
    )
}

export default Cell;
