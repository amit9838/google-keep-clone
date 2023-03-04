import { createContext, useState } from "react";

export const DataContext = createContext(null);


let data = [
    {
        id: 1,
        title: "To Buy",
        description: "Mango",
        background: "#E96479",
        status:'active'
    },
    
    {
        id: 2,
        title: "Best Laptops",
        description: "Dell, HP",
        background: '#ECF2FF',
        status:'archive'
    },
    {
        id: 3,
        title: "Palces to Visit",
        description: "Singapore, Hallstatt",
        background: '#EDF1D6',
        status:'trash'
    },
    {
        id: 4,
        title: "Top tech leads",
        description: "Google, Apple, Microoft",
        background: '#EDF1D6',
        status:'active'
    }
]

const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState(data)
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