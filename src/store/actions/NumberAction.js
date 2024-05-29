import { numberActions } from "../reducers/NumberReducer";

function increaseNumber(dispatch) {
    // dispatch({ type: 'PLUS' });
    dispatch(numberActions.increaseNumber());
}

function decreaseNumber(dispatch) {
    // dispatch({ type: 'MINUS' });
    dispatch(numberActions.decreaseNumber());
}

function incrementByAmount(dispatch, amount) {
    // dispatch({ type: 'AMOUNT', payload: amount });
    dispatch(numberActions.incrementByAmount(amount));
}

export const numberAction = { increaseNumber, decreaseNumber, incrementByAmount };