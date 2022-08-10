import React, { useContext,useState,useEffect } from "react";
import data from './data'
const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [list, setList] = useState([]);
    const [filters, setFilters] = useState([]);

    const setSearch = (data) => {
        setFilters(data)
    }
    const addFilter = (data) => {
        if (!filters.includes(data) && data !== '') {
            setFilters([...filters,data])
        }
    }

    const deleteFilter = (data) => {
        const newFilters = filters.filter((filter) => filter !== data)
        setFilters(newFilters)
    }

    const clearAllFilters = () => {
        setFilters([])
    }

    const filterData = () => {
        if (filters.length > 0) {
            const newData = list.filter((d) => {
                return filters.every((filter) => {
                    return (
                        d.role === filter ||
                        d.level === filter ||
                        d.languages.includes(filter) ||
                        d.tools.includes(filter)
                    );
                });
                
            });
            setList(newData)
        } else {
            setList(data)
        }
        }

    useEffect(() => {
        filterData()
    }, [filters]);
    
    return (
        <AppContext.Provider value={{
            list,
            filters,
            addFilter,
            deleteFilter,
            clearAllFilters,
            setSearch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

// useEffect(()=>{

    //     if (filters.length === 0) {
    //         setList(data)
    //     }
    // }, [filters])
    
    // const filtering = (by = '') =>{
    //     if (!filters.includes(by) && by !== '') {
    //         setFilters([...filters, by])
    //         setList(list.filter((item) => [...item.languages, ...item.tools].includes(by) ))
    //         console.log(by);
    //     }
    // }

    // const removeFilter = (text) => {
    //     let updatedFilters = filters.filter((item) => item !== text)
    //     setFilters(updatedFilters)
    //     // setList(list.filter((item) => [...item.languages, ...item.tools].includes(text) ))
        
    // }
    // const clear = () => {
    //     setFilters([])
    //     setList(data)
        
    // }