import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { placeholder } from "../api/api";
import { useUser } from "./userContext";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodosProviderProps {
  children: ReactNode;
}

interface TodosContextData {
  todos: Todo[];
  updateTodo: (todo: Todo) => Promise<void>;
}

const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodoProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { user } = useUser();

  useEffect(() => {
    placeholder
      .get(`/users/${user.userId}/todos`)
      .then((response) => setTodos(response.data));
  }, [user]);

  async function updateTodo(todo: Todo) {
    const response = await placeholder.put(`/posts/${todo.id}`, {
      ...todo,
      completed: todo ? false : true,
    });
    const { data } = response;
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === data.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    ]);
  }

  return (
    <TodosContext.Provider value={{ todos, updateTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);

  return context;
}
