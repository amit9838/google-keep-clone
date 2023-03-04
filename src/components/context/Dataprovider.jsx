import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);


let data = [
    {
        id: 1,
        title: "To Buy",
        description: "Mango",
        background: "#E96479",
        status: 'active'
    },

    {
        id: 2,
        title: "Best Laptops",
        description: "Dell, HP",
        background: '#ECF2FF',
        status: 'archive'
    },
    {
        id: 3,
        title: "Palces to Visit",
        description: "Singapore, Hallstatt",
        background: '#EDF1D6',
        status: 'trash'
    },
    {
        id: 4,
        title: "Top tech leads",
        description: "Google, Apple, Microoft",
        background: '#EDF1D6',
        status: 'active'
    }
]

const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes.length===0 || !localNotes || localNotes==='undefined' ||localNotes ===null) {
            localStorage.setItem('notes',JSON.stringify([]))
        }
        else{
            let localNotes = localStorage.getItem('notes');
            setNotes(JSON.parse(localNotes));
        }
    }, [])
    

    const updateNotes=() => {
        localStorage.setItem('notes',JSON.stringify(notes))
    }

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            updateNotes
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;