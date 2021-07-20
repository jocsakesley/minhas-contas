import React, { useState } from "react";



export const InputContext = React.createContext({});

export const InputProvider = (props) =>{
    const [input, setInput] = useState([])
    return (
        <InputContext.Provider value={{input, setInput}}>
            {props.children}
        </InputContext.Provider>
    )
}

export const OutputContext = React.createContext({});

export const OutputProvider = (props) =>{
    const [output, setOutput] = useState([])
    return (
        <OutputContext.Provider value={{output, setOutput}}>
            {props.children}
        </OutputContext.Provider>
    )
}