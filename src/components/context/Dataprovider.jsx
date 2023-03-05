import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        let localNotes = localStorage.getItem('notes');
        if (!localNotes || localNotes==='undefined' ||localNotes == null || localNotes.length===0) {
            localStorage.setItem('notes',JSON.stringify([]))
        }
        else{
            let localNotes = localStorage.getItem('notes');
            setNotes(JSON.parse(localNotes));        }
    }, [])
    

    const updateNotes=() => {
        // console.log(notes);
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