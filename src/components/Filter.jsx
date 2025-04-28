export const TodoList = ({ todos }) => {
    return (
      <ul>
        {todos.map(todo => {
          return <li>
              <p key={todo.id}>{todo.text}</p>
              <input type="checkbox" name="" id="" checked={todo.completed}/>
          </li>;
        })}
      </ul>
    );
  };