import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    data: any[];
    enterLoading: boolean;
}

const initialState: State =  {
    data: [],
    enterLoading: true,
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                enterLoading: action.payload
            }
        },
        setData: (state, action: PayloadAction<any[]>) => {
            console.log(action)
            return {
                ...state,
                data: action.payload,
            }
        }
    },
})

export const { setLoading, setData } = homeSlice.actions;

export default homeSlice.reducer;
