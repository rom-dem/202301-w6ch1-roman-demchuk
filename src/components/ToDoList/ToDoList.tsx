import ToDo from "../ToDo/ToDo";

const ToDoList = (): JSX.Element => {
  return (
    <ul className="todo__list">
      <ToDo />
    </ul>
  );
};

export default ToDoList;
