import { action, makeAutoObservable } from "mobx";
import { MyContext } from "../components/context";
import TodoList from "../components/todoList";
import TodoForm from "../components/todoForm";

class TodoStore {
  todo = [];

  constructor() {
    makeAutoObservable(this, {
      setTodo: action.bound,
      removeItem: action.bound,
    });
  }

  setTodo(value) {
    this.todo.push(value);
  }
  removeItem(index) {
    this.todo.splice(index, 1);
  }
}

const store = new TodoStore();
function todoPage() {
  return (
    <MyContext.Provider value={store}>
      <div >
        <TodoForm />
        <TodoList />
      </div>
    </MyContext.Provider>
  );
}

export default todoPage;
