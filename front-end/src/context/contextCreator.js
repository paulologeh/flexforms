import React, { useState, createContext } from 'react';

const CreatorsContext = createContext();

const initialStore = {
    selectedTool: null,
    tools: []
}

function CreatorsProvider(props) {

    const [createdTools, updateCreated] = useState(initialStore);

    return (
        <CreatorsContext.Provider value={[createdTools, updateCreated]}>
            {props.children}
        </CreatorsContext.Provider>
    );
}

export {
    CreatorsContext,
    CreatorsProvider
}