import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { TodoEditor } from './TodoEditor';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const parsedTodos = JSON.parse(todos);
      setTodos( parsedTodos );
    }
  }, []);









  
  // componentDidUpdate(prevPromps, prevState){
  //   if(prevState.todos === this.state.todos){
  //     return
  //   }
  //   localStorage.setItem('todos', JSON.stringify(this.state.todos))
  // }

  // componentDidMount(){
  //   const todos = localStorage.getItem("todos")
  //   if(todos){
  //     const parsedTodos = JSON.parse(todos)
  //     this.setState({todos: parsedTodos})
  //   }
  // }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = labelText => {
    const newTodo = {
      id: Date.now(),
      text: labelText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onShow = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={onShow} type="button">
        Відкрити модалку
      </button>
      <TodoList toggle={toggleComplete} onDelete={deleteTodo} 
      todos={todos} />

      {show && (
        <Modal Show={onShow}>
          <TodoEditor Show={onShow} addTodo={addTodo} />
        </Modal>
      )}
    </>
  );
};
