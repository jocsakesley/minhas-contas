import React, { useEffect, useState } from "react";
import { BillsService } from "../services/api";



export const DataContext = React.createContext({});

export const DataProvider = (props) =>{
    const [data, setData] = useState([])
    const [updateData, setUpdateData] = useState(false)
    
    const getBills = async () => {
        let bills = await BillsService.getBills()
        bills = await bills.data
        setData(bills)
    }

    useEffect(()=>{
        getBills()
    }, [updateData])


    return (
        <DataContext.Provider value={{data, setData, updateData, setUpdateData}}>
            {props.children}
        </DataContext.Provider>
    )
}

