import { useContext } from "react";
import { observer } from "mobx-react";
import { MyContext } from "./context";
import { DeleteOutlined } from "@ant-design/icons";

const TodoList = observer(() => {
  const { todo, removeItem } = useContext(MyContext);

  return (
    <div className="w-full" >
      {todo.map((todoItem, index) => (
        <div
          key={index}
          className="flex items-end justify-between flex-nowrap p-2 text-xl"
          style={{ color: todoItem.checked ? "green" : "red" }}
        >
          <div className='text-ellipsis'>{todoItem.text}</div>
          <DeleteOutlined onClick={() => removeItem(index)}/>
        </div>
      ))}
    </div>
  );
});

export default TodoList
