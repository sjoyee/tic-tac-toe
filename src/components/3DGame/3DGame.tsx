import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Board from '../3DBoard/3DBoard';
import { Row, Column, GameContainer } from './3DGameElem';
import { useGameState } from '../3DGameState/GameState';
import ActionLog from '../3DActionLog/3DActionLog';
import Text from './Text';
import { LayoutCard, LayoutButton } from '../Layout/LayoutElem';

const GamePage = () => {
    const {
        gameState, current, isNext, winner, winIndex, handleClick, jumpBack
    }
        = useGameState();

    const restartClick = () => {
        window.location.reload();
    }

    const hasWon = winner ? true : false;

    const draw = !current.includes(null) && !hasWon;

    return (
        <GameContainer>
            <Row gap={20}>
                <Column gap={20}>
                    <div className="canvas">
                        <Canvas style={{ height: "500px", width: "800px" }} camera={{ position: [-15, 8, 30], fov: 40 }}>
                            <Text />
                            <ambientLight intensity={0.3} />
                            <spotLight position={[0, 10, 15]} />
                            <Board board={current} onClick={handleClick} hasWon={hasWon} winIndex={winIndex} />
                            <OrbitControls />
                        </Canvas>
                    </div>
                    {draw ? <div>
                        <LayoutButton onClick={restartClick} style={{ fontSize: "18px", fontWeight: "bold", alignItems: "center", margin: "10px 400px" }}>
                            Restart
                        </LayoutButton>
                        <LayoutCard>
                            {`Draw`}
                        </LayoutCard>
                    </div> : hasWon ?
                        <div>
                            <LayoutButton onClick={restartClick} style={{ fontSize: "18px", fontWeight: "bold", alignItems: "center", margin: "10px 400px" }}>
                                Restart
                            </LayoutButton>
                            <LayoutCard>
                                {`Winner: Player ${winner}`}
                            </LayoutCard>
                        </div>
                        :
                        <LayoutCard>
                            {`Player ${isNext ? 'X' : 'O'}'s turn`}
                        </LayoutCard>}
                    {/* {hasWon ?
                        <div>
                            <LayoutButton onClick={restartClick} style={{ fontSize: "18px", fontWeight: "bold", alignItems: "center", margin:"10px 400px" }}>
                                Restart
                            </LayoutButton> 
                            <LayoutCard>
                                {`Winner: Player ${winner}`}
                            </LayoutCard>
                        </div> 
                        :
                        <LayoutCard>
                            {`Player ${isNext ? 'X' : 'O'}'s turn`}
                        </LayoutCard>
                    } */}
                </Column>
                <Column gap={20}>
                    <ActionLog history={gameState.history} jumpBack={jumpBack} />
                </Column>
            </Row>
        </GameContainer>
    )
}

export default GamePage;
