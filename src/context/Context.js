import React, { createContext } from 'react';
import Mobilestore from '../store/Mobilestore';

export const Context = createContext();
export const Provider = (props) => {
    return (
        <Context.Provider value={{ ...Mobilestore() }} >
            {props.children}
        </Context.Provider>
    )
}

