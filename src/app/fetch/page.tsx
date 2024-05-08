import { getTodosFetch } from "@/api/todos";

export default async function Fetch() {
  const todos = await getTodosFetch();
  return (
    <>
      <h1>Todos From Fetch</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : undefined,
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
