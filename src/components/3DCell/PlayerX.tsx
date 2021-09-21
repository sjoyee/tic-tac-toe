import { useRef } from "react";
import * as THREE from 'three';
import * as ReactThreeFiber from "@react-three/fiber";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
            group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>;
        }
    }
}

type XProps = {
    position: [number, number, number],
    colour: string,
    isWinId: boolean,
}

const PlayerX = (props: XProps) => {
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
                <cylinderBufferGeometry args={[0.4, 0.4, 3]} />
                <meshStandardMaterial color={props.colour} />
            </mesh>
            <mesh ref={mesh}
                position={props.position}
                position-z={props.isWinId ? [3] : [props.position[2]]}
                receiveShadow
                castShadow
                rotation-z={-Math.PI / 4}
            >
                <cylinderBufferGeometry args={[0.4, 0.4, 3]} />
                <meshStandardMaterial color={props.colour} />
            </mesh>
        </group>
    )
}

export default PlayerX
