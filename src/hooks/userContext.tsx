import { createContext, useState, ReactNode, useContext } from 'react'

interface User{
    userId: number;
}

interface UserProviderProps{
    children: ReactNode;
}

interface UserContextData{
    user: User;
    updateUserLogged: Function;
}

const UserContext =  createContext<UserContextData>({} as UserContextData);

export function UserProvider( { children }: UserProviderProps){
    const [user, setUser] = useState<User>({userId: 1});

    function updateUserLogged(id: number){
        setUser({userId: id})
    }

    return (
        <UserContext.Provider value={{user, updateUserLogged}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(){
    const context = useContext(UserContext);

    return context;
}