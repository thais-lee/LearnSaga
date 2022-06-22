import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todo: [],
  loading: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodo(state, action) {
      state.loading = true;
    },
    getTodoSuccess(state, action) {
      state.loading = false;
      state.todo = action.payload;
    },

    addTodo(state, action) {
      state.loading = true;
    },
    addTodoSuccess(state, action) {
      state.loading = false;
      state.todo = action.payload;
    },

    toogleTodo(state, action) {
      state.loading = true;
    },

    toogleTodoSuccess(state, action) {
      state.loading = false;
      state.todo = action.payload;
    },

    deleteTodo(state, action) {
      state.loading = true;
      // state.todo = action.payload;
    },

    deleteTodoSuccess(state, action) {
      state.loading = false;
      state.todo = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export const selectAllTodo = state => state.todo.todo;
export const selectLoading = state => state.todo.loading;
export default todoSlice.reducer;
