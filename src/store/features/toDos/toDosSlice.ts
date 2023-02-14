import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialToDos = [
  {
    id: 1,
    name: "Walk",
    isDone: false,
  },
  {
    id: 2,
    name: "Sleep",
    isDone: true,
  },
];

const toDosSlice = createSlice({
  name: "todos",
  initialState: initialToDos,
  reducers: {
    toggleToDo: (currentToDos, action: PayloadAction<number>) =>
      currentToDos.map((toDo) => ({
        ...toDo,
        isDone: toDo.id === action.payload ? !toDo.isDone : toDo.isDone,
      })),
  },
});

export const toDoReducer = toDosSlice.reducer;
export const { toggleToDo: toggleToDoActionCreator } = toDosSlice.actions;
