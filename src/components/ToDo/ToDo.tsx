const ToDo = (): JSX.Element => {
  return (
    <li className="todo__item">
      <button className="todo__button--done">✔️</button>
      <button className="todo__button--not-done">❌</button>
      <span className="todo__text">Example To-do</span>
    </li>
  );
};

export default ToDo;
