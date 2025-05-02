import { useState } from 'react';

export const TodoEditor = ({ Show, addTodo }) => {
  const [textValue, setTextValue] = useState('');

  const handleChange = e => {
    setTextValue(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(textValue);
    Show();
    e.currentTarget.reset();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <textarea
            name="edit"
            id=""
            value={textValue}
            onChange={handleChange}
          ></textarea>
        </label>

        <button>Додати</button>
      </form>
    </>
  );
};
