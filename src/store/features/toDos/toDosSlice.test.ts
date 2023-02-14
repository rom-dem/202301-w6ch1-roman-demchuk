import { ToDosStructure, ToDoStructure } from "../../types";
import { toDoReducer, toggleToDoActionCreator } from "./toDosSlice";

describe("Given a toDosSlice function", () => {
  describe("When it receives a list of two undone to-dos named Walk and Sleep and a toggle action to set Walk as done", () => {
    test("Then it should return a list with Walk done and Sleep undone", () => {
      const walk: ToDoStructure = {
        id: 1,
        name: "Walk",
        isDone: false,
      };
      const sleep: ToDoStructure = {
        id: 2,
        name: "Sleep",
        isDone: false,
      };
      const toDos: ToDosStructure = [walk, sleep];

      const toggleWalk = toggleToDoActionCreator(walk.id);
      const expectedToDos = [
        {
          id: 1,
          name: "Walk",
          isDone: true,
        },
        {
          id: 2,
          name: "Sleep",
          isDone: false,
        },
      ];

      const newToDos = toDoReducer(toDos, toggleWalk);

      expect(newToDos).toStrictEqual(expectedToDos);
    });
  });
});
