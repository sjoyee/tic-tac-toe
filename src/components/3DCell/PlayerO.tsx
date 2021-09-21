import { useRef } from "react";
import * as THREE from 'three';

type OProps = {
    position: [number, number, number],
    colour: string,
    isWinId: boolean,
}

const PlayerO = (props: OProps) => {
    const group = useRef<THREE.Group>();
    const mesh = useRef<THREE.Mesh>();
    return (
        <group ref={group}>
            <mesh ref={mesh}
                position={props.position}
                position-z={props.isWinId ? [3] : [props.position[2]]}
                receiveShadow
                castShadow
                rotation-z={Math.PI / 4}
            >
                <torusBufferGeometry args={[1, 0.4, 16, 30]} />
                <meshStandardMaterial color={props.colour} />
            </mesh>
        </group>
    )
}

export default PlayerO;
