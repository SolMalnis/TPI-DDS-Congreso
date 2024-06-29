import React, {useState, useEffect} from "react";
import articulosvc from "../services/articulosvc";
import TablaArticulos from "./TablaArticulos"
import TablaDetalle from "./TablaDetalle"


export default function Articulos (){
    const [rows, setRows] = useState([])
    const [action, setAction] = useState('C')
    const [item, setItem] = useState({})

    const loadGrid = async() =>{
        const data = await articulosvc.getArticulos()
        setRows(data)
    }
    useEffect(() => {
        loadGrid()
    }, [])

    const onActualizar = async(item)=>{
        setItem(item)
        setAction('A')
    }
    
    const onGuardar = async (data) => {
        const result = await articulosvc.saveArticulo(data)
        if(result){
            loadGrid()
            setAction('C')
        }
    }



    return (
        <>
         {action === 'C' && (
            <>
             <TablaArticulos rows={rows} onActualizar={onActualizar} ></TablaArticulos>
             </>)}
        {action === !'C' && (
            <>
             
             </>)}
        </>
    )
}