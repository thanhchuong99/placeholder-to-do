import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { AlbumsProvider } from "./hooks/useAlbums";
import { PostProvider } from "./hooks/usePosts";
import { TodoProvider } from "./hooks/useTodos";
import { Album } from "./routes/Album";
import { Posts } from "./routes/Posts";
import { Todo } from "./routes/Todo";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="/todo"
          element={
            <TodoProvider>
              <Todo />
            </TodoProvider>
          }
        />
        <Route
          path="/posts"
          element={
            <PostProvider>
              <Posts />
            </PostProvider>
          }
        ></Route>
        <Route
          path="/albums"
          element={
            <AlbumsProvider>
              <Album />
            </AlbumsProvider>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Not found!!!</p>
            </main>
          }
        />
        <Route
          path="/"
          element={
            <main style={{ padding: "1rem", textAlign: "center" }}>
              <p>
                <a
                  href="https://jsonplaceholder.typicode.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  JSON Placeholder
                </a>
              </p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);
