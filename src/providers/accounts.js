import React, { useEffect, useState } from "react";
import { BillsService } from "../services/api";



export const DataContext = React.createContext({});

export const DataProvider = (props) =>{
    const [data, setData] = useState([])
    
    const getBills = async () => {
        let bills = await BillsService.getBills()
        bills = await bills.data
        setData(bills)
    }
    const [refreshGetBills] = useState(getBills)
    useEffect(()=>{
        getBills()
    }, [])


    return (
        <DataContext.Provider value={{data, setData, refreshGetBills}}>
            {props.children}
        </DataContext.Provider>
    )
}

