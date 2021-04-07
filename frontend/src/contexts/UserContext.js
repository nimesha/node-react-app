

import React, { useEffect, createContext, useReducer } from 'react';
import { userReducer } from '../reducers/userReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [user, dispatch] = useReducer(userReducer, [], () => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : {};
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);


    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;