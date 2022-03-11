import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { placeholder } from "../api/api";
import { useUser } from "./userContext";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsProviderProps {
  children: ReactNode;
}

interface PostsContextData {
  posts: Post[];
}

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

export function PostProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useUser();

  useEffect(() => {
    placeholder
      .get(`/users/${user.userId}/posts`)
      .then((response) => setPosts(response.data));
  }, [user]);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}
