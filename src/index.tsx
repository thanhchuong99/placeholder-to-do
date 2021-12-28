import { render} from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from './App'
import { AlbumsProvider } from "./hooks/useAlbums";
import { PostProvider } from "./hooks/usePosts";
import { TodoProvider } from "./hooks/useTodos";
import { Album } from "./routes/Album";
import { Post } from "./routes/Post";
import { Todo } from "./routes/Todo";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/todo" element={<TodoProvider><Todo /></TodoProvider>} />
        <Route path="/posts" element={<PostProvider><Post /></PostProvider>} />
        <Route path="/albums" element={<AlbumsProvider><Album /></AlbumsProvider>} />
        <Route
            path="*"
            element={
                <main style={{ padding: "1rem" }}>
                <p>Ops! Esse Link não foi encontrado</p>
                </main>
            }
        />
        <Route
            path="/"
            element={
                <main style={{ padding: "1rem", textAlign: 'center' }}>
                <p>
                    Aplicação exemplo, algumas ações estão limitadas por conta da API utilizada.
                    <br/>
                    Para mais informações acesse 
                    <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer"> JSON Placeholder</a>
                </p>
                </main>
            }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);