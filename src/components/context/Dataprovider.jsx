import { createContext, useState } from "react";

export const DataContext = createContext(null);


const DataProvider = ({children}) => {
    const [notes, setNotes] = useState([])
    const [archiveNotes, setArchiveNotes] = useState([])
    const [trashNotes, setTrashNotes] = useState([])

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            trashNotes,
            setTrashNotes
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;