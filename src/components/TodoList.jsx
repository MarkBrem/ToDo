export const TodoList = ({ todos, onDelete, toggle }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <input onChange={()=>{
              toggle(todo.id)
            }} type="checkbox" name="" id="" checked={todo.completed} />
            <button
              onClick={() => {
                onDelete(todo.id);
              }}
              type="button"
            >
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};
