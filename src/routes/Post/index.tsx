import { usePosts } from '../../hooks/usePosts';
import { Content } from './styles'

export function Post(){
    const { posts } = usePosts();
    
    return (
        <Content>
            {posts.map(post => {
                return (  
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                )
            })}  
        </Content>
    )
}