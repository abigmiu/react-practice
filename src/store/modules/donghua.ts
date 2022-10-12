import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    data: any[];
    enterLoading: boolean;
    type: {
        typename: string;
        typepath: string;
    },
    typename: any[],
}

const initialState: State = {
    data: [],
    enterLoading: true,
    type: {
        typename: '推荐',
        typepath: '/donghua/1'
    },
    typename: [],
}

const donghuaSlice = createSlice({
    name: 'donghua',
    initialState,
    reducers: {
        setDonghuaData(state, action: PayloadAction<any[]>) {
            return {
                ...state,
                data: action.payload
            }
        },
        setDonghuaLoading(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                enterLoading: action.payload,
            }
        },
        setDonghuaType(state, action: PayloadAction<{ typename: string; typepath: string }>) {
            return {
                ...state,
                type: action.payload,
            }
        },
        setDonghuaTypeName(state, action: PayloadAction<any[]>) {
            return {
                ...state,
                typename: action.payload,
            }
        }
    }
})

export const { setDonghuaData, setDonghuaLoading, setDonghuaType, setDonghuaTypeName} = donghuaSlice.actions;
export default donghuaSlice.reducer;
