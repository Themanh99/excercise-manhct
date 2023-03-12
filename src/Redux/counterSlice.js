const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        },
        reset: (state) => {
            return state = 0;
        }
    }
});

const { actions, reducer } = counterSlice;

export const { increment, decrement, reset } = actions;
export default reducer;