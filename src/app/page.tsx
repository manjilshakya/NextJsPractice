import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

async function getTodos() {
  await wait(2000);
  // throw new Error("asdfghj");

  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}
export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map(
          (todo: {
            id: Key | null | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          }) => (
            <li key={todo.id}>
              <Link href={`todos/${todo.id}`}>{todo.title}</Link>
            </li>
          )
        )}
      </ul>
    </>
  );
}
function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
