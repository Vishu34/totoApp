import React, { createContext, useContext, useState } from 'react'

const Appcontext = createContext(null);



const ShowLastProvider = ({children}) => {

    const [showCol , setCol]=useState(false);
const [ColId , setId ]= useState();

const [listData, settodoData]=useState([]);
 return (
    <>
        <Appcontext.Provider
        value={{
            showCol,
            setCol,
            ColId,
            setId,
            listData, settodoData
        }}>
{children}
 </Appcontext.Provider>
    </>
 )
}


 const UseshowLastCol=()=>{
    return useContext(Appcontext)
 };

 export  {ShowLastProvider , UseshowLastCol}

 
