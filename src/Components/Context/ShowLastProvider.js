import React, { createContext, useContext, useState } from 'react'

const Appcontext = createContext(null);



const ShowLastProvider = ({children}) => {

    const [showCol , setCol]=useState(true)
const [ColId , setId ]= useState();

 
 return (
    <>
        <Appcontext.Provider
        value={{
            showCol,
            setCol,
            ColId,
            setId
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

 
