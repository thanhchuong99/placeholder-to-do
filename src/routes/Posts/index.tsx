import { Link } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { Content } from "./styles";

export function Posts() {
  const { posts } = usePosts();

  return (
    <Content>
      {posts.map((post) => {
        return (
          <div>
            <Link key={post.id} to={`${post.id}`}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </Link>
          </div>
        );
      })}
    </Content>
  );
}
