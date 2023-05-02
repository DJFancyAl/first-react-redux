import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        return {items: [...state.items, action.payload]}
    },
    removeTodo: (state, action) => {
        state.items.splice(action.payload,1)
    },
    clearTodo: (state) => {
        return {items: []}
    }
  }
});

export const {addTodo, removeTodo, clearTodo} = todoSlice.actions

export default todoSlice.reducer