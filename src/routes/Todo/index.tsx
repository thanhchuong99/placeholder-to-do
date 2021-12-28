import { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { Content, InputBox, Spinner } from './styles'

interface TodoInterface  {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export function Todo(){
    const { todos, updateTodo } = useTodos();
    const [ isLoading, setIsLoading ] = useState(false);

    async function handleUpdateCompleted(selectedTodo: TodoInterface){
        setIsLoading(true)
        await updateTodo(selectedTodo)
        setIsLoading(false)
    }

    return (
        <Content>
            <Spinner isLoading={isLoading}><div className='loader'>Loading...</div></Spinner>
            {todos.map(todo => {
                return (  
                    <InputBox 
                        key={todo.id} 
                        isActive={todo.completed}
                        activeColor="green"
                        onClick={event => handleUpdateCompleted(todo)}
                    >
                        <h4>{todo.title}</h4>
                    </InputBox>
                )
            })}
        </Content>
    )
}