import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { UserProfile } from "./UserProfile";
import { Text } from "./Text";
import { User } from "./types/User";

const user: User = {
  name: "ore",
  hobbies: ["aaaa", "bbbb", "ccc"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const fetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={fetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
