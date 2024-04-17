import { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../services/authService';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState();
    const gettingUser = async () => {
        await getUser()
            .then((res)=>{
                setUser(res.data.user)
            })
            .catch((error)=>{
            })
    }

    useEffect(()=>{
        gettingUser()
    },[])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
    
}

export function useUser() {
  return useContext(UserContext);
}