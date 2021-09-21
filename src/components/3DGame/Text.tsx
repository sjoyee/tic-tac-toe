import { useRef } from "react";
import * as THREE from "three";
import ChickenPie from "../../assets/CHICKEN Pie_Regular.json"
import { Colour } from "../Layout/LayoutElem";

const Text = () => {
  const group = useRef(null);
  const mesh = useRef(null);

  const font = new THREE.FontLoader().parse(ChickenPie);

  const textOptions = {
    font,
    size: 1.5,
    height: 0.25,
  };

  return (
    <group ref={group} position={[-5, 8, 2]}>
      <mesh castShadow receiveShadow ref={mesh}>
        <textGeometry attach="geometry" args={["Tic Tac Toe", textOptions]} />
        <meshPhysicalMaterial
          attach="material"
          color={Colour.titleColour}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}


export default Text;