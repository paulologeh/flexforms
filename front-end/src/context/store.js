import React, { useState, createContext } from 'react';

const sampleTool = {
    example: {
        id: 0,
        text: null,
        tool: null,
        xPct: 0,
        yPct: 0,
        width: 0,
        height: 0,
        selected: false
    }
}

const CreatorsContext = createContext(sampleTool);

const CreatorsProvider = ({children}) => {

    const [getContext, setContext] = useState(sampleTool);

    return (
        <CreatorsContext.Provider value={[getContext, setContext]}>
            {children}
        </CreatorsContext.Provider>
    );
}

export {
    CreatorsContext,
    CreatorsProvider
}