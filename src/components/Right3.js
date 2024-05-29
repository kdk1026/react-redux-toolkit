import { useDispatch } from "react-redux";
import { numberAction } from "../store/actions/NumberAction";
import { useState } from "react";

export default function Right3(props) {
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <h1>Right3</h1>
            <button onClick={() => {
                numberAction.increaseNumber(dispatch);
            }}>+</button>
            <button onClick={() => {
                numberAction.decreaseNumber(dispatch);
            }}>-</button>

            <input type="text" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
            <button onClick={() => {
                numberAction.incrementByAmount(dispatch, incrementAmount);
            }}>Add Amount
            </button>
        </div>
    )
}