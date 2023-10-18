import React, { useContext, createContext, useState } from "react"

export const HistoryContext = createContext({})

export const useHistoryContext = () => {
    const context = useContext(HistoryContext)

    if (!context) {
        throw new Error(
            'Theme Context not provided'
        )
    }

    return context
}

export const HistoryProvider = ({ children }) => {
    const [contas, setContas] = useState([])

    const value = {
        contas,
        addConta
    }

    function addConta(newConta) {
        setContas([...contas, newConta])
    }

    return (
        <HistoryContext.Provider value={value}>
            { children }
        </HistoryContext.Provider>
    )
}