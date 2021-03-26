import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState();

    const addUser = (id) => {
        setUser({ 'user_id': id });
    };
    const removeUser = () => {
        setUser({});
    }

    return (
        <UserContext.Provider value={{ user, addUser, removeUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;