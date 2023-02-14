const Form = (): JSX.Element => {
  return (
    <form className="form" action="">
      <label className="form__label" htmlFor="text">
        Add new task
      </label>
      <input className="form__input" id="text" type="text" />
      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
