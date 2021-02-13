import React, { useState, createContext } from 'react';

export const Store = createContext();

const initialStore = {
    selectedTool: '',
    canvasTools: []
}

export function StoreProvider(props) {

    const [store, updateStore] = useState(initialStore);

    return (
        <Store.Provider value={[store, updateStore]}>
            {props.children}
        </Store.Provider>
    );
}