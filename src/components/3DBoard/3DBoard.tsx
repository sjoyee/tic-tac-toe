import { useRef } from "react";
import * as THREE from 'three';
import * as ReactThreeFiber from "@react-three/fiber";
import { BoardState } from "../3DGameState/GameState";
import Cell from "../3DCell/3DCell";
import { Colour } from "../Layout/LayoutElem";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
            group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>;
        }
    }
}

type BoardProps = {
    board: BoardState,
    onClick: (box: number) => void,
    hasWon: boolean,
    winIndex: number[] | null
};

const Board = ({ board, onClick, hasWon, winIndex }: BoardProps) => {
    const group = useRef<THREE.Group>();
    const mesh = useRef<THREE.Mesh>();

    const cellPosition = [
        [-4, 4, 1.5],
        [0, 4, 1.5],
        [4, 4, 1.5],
        [-4, 0, 1.5],
        [0, 0, 1.5],
        [4, 0, 1.5],
        [-4, -4, 1.5],
        [0, -4, 1.5],
        [4, -4, 1.5]
    ];

    return (

        <group ref={group}>
            <mesh ref={mesh} position={[0, 6, 1.5]} receiveShadow castShadow>
                <boxBufferGeometry args={[12.5, 0.5, 2]} />
                <meshStandardMaterial color={Colour.boardColour} roughness={0.1}/>
            </mesh>
            <mesh ref={mesh} position={[0, -6, 1.5]} receiveShadow castShadow>
                <boxBufferGeometry args={[12.5, 0.5, 2]} />
                <meshStandardMaterial color={Colour.boardColour} roughness={0.1}/>
            </mesh>
            <mesh ref={mesh} position={[6, 0, 1.5]} receiveShadow castShadow>
                <boxBufferGeometry args={[0.5, 12.5, 2]} />
                <meshStandardMaterial color={Colour.boardColour} roughness={0.1}/>
            </mesh>
            <mesh ref={mesh} position={[-6, 0, 1.5]} receiveShadow castShadow>
                <boxBufferGeometry args={[0.5, 12.5, 2]} />
                <meshStandardMaterial color={Colour.boardColour} roughness={0.1}/>
            </mesh>
            <mesh ref={mesh} position={[-2, 0, 1.5]} receiveShadow castShadow>
                <boxBufferGeometry args={[0.5, 12.5, 2]} />
                <meshStandardMaterial color={Colour.boardColour} roughness={0.1}/>
            </mesh>
            <mesh ref={mesh} position={[2, 0, 1.5]} receiveShadow castShadow>
                <boxBufferGeometry args={[0.5, 12.5, 2]} />
                <meshStandardMaterial color={Colour.boardColour} roughness={0.1}/>
            </mesh>
            <mesh ref={mesh} position={[0, -2, 1.5]} receiveShadow castShadow>
                <boxBufferGeometry args={[12.5, 0.5, 2]} />
                <meshStandardMaterial color={Colour.boardColour} roughness={0.1}/>
            </mesh>
            <mesh ref={mesh} position={[0, 2, 1.5]} receiveShadow castShadow>
                <boxBufferGeometry args={[12.5, 0.5, 2]} />
                <meshStandardMaterial color={Colour.boardColour} roughness={0.1}/>
            </mesh>
      
       {
        cellPosition.map(
            ([x, y, z], index) => (
                <Cell key={index} position={[x,y,z]} id={index} board={board} onClick={onClick} hasWon={hasWon} winIndex={winIndex}/>
            )
        )
    }
          </group>
    );
}


export default Board;
