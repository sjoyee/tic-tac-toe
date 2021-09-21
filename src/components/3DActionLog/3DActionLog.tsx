import { BoardState } from "../3DGameState/GameState";
import { LayoutButton } from "../Layout/LayoutElem";

type ActionLogProps = {
    history: BoardState[],
    jumpBack: (step: number) => void
}

const ActionLog = (props: ActionLogProps) => {
    return (
        <>
            <ol>
            <h2>Action Logs</h2>
                {
                    props.history.map(
                        (_, stepIndex) => {
                            return (
                                <>
                                    <li key={stepIndex}>
                                        <LayoutButton onClick={() => props.jumpBack(stepIndex)}>
                                            Go to {stepIndex === 0 ? 'start' : `move #${stepIndex}`}
                                        </LayoutButton>
                                    </li>
                                    <br />

                                </>
                            );
                        }
                    )
                }
            </ol>
        </>
    )
}

export default ActionLog;
