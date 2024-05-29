import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    number: 1
};

// function numberReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'PLUS':
//             return {
//                 ...state,
//                 number: state.number + 1
//             }
//         case 'MINUS':
//             return {
//                 ...state,
//                 number: state.number - 1
//             }
    
//         default:
//             return state;
//     }
// }

// export default numberReducer;

const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        increaseNumber(state, action) {
            state.number = state.number + 1
        },
        decreaseNumber(state, action) {
            state.number = state.number - 1
        },
        incrementByAmount(state, action) {
            state.number = state.number + Number(action.payload)
        }
    }
});

export const numberActions = numberSlice.actions;
export default numberSlice.reducer;