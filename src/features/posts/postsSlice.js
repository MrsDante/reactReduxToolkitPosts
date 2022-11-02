import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Что-то занимательное', content: 'Какое-то занимательное содержание'},
    { id: '2', title: 'Еще что-то занимательное', content: 'А тут ничего нет'}
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;