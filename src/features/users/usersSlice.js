import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Sandra' },
    { id: '1', name: 'Max' },
    { id: '2', name: 'Boris' },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;