import React, { useEffect, useMemo, useState } from "react";
import { IoIosAlert } from "react-icons/io";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { MdDateRange, MdDelete } from "react-icons/md";
import { IoInfiniteOutline, IoNotificationsOutline, IoRepeat } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { BsRepeat } from "react-icons/bs";
import { UseshowLastCol } from "./Context/ShowLastProvider";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

export const LastColumn = () => {

    const {showCol , setCol , ColId, listData, settodoData}= UseshowLastCol();
    const mode = useSelector((state) => state.togglemode.value);

   
    const hideLastCol=()=>{
setCol(false);
    }

    

    // get teh completeed data
   
    
   
  console.log(ColId)

  console.log(listData)


  const FilterData=listData.find(elm=>elm.id===ColId);

  console.log(FilterData)

  return (
    <>
{
    showCol ? (
        <>
        <section className={
            ` ${ mode ==="dark-mode" ? "Last-column1" : "Last-column" }`}
        >
        <div className="pt-10 flex flex-col space-y-10 justify-between h-[100%]">
          <div className="space-y-1">
            <ul className="space-y-2">
              <li className=
               {`  border-t-2 ${ mode ==="dark-mode" ? "all-list-last1" : "all-list-last" }`}
              
              >
                <input type="checkbox" />
                <ListItem>{
                FilterData?.task}</ListItem>
              </li>

             

              <li className=
               {`  ${ mode ==="dark-mode" ? "all-list-last1" : "all-list-last" }`}
              >
                <IoMdAdd className="text-xl icon"/>
                <ListItem>Add Step</ListItem>
              </li>
              <li className=
               {`  ${ mode ==="dark-mode" ? "all-list-last1" : "all-list-last" }`}
              >
                <IoNotificationsOutline className="text-xl icon"/>
                <ListItem>Set Reminder</ListItem>
              </li>
              <li className=
               {`   ${ mode ==="dark-mode" ? "all-list-last1" : "all-list-last" }`}>
                <IoRepeat className="text-xl icon"/>
                <ListItem>Repeat</ListItem>
              </li>
            </ul>
          </div>



         <div className="">
            <ul>
            <li className=
             {`  ${ mode ==="dark-mode" ? "all-list-last1" : "all-list-last" }`}>
                <FaTimes className=" icon cursor-pointer" onClick={hideLastCol}/>
                <ListItem>created Today</ListItem>
                <MdDelete className="icon" />
              </li>
            </ul>
         </div>



        </div>




       


      </section>
        </>
    ) : null
}
     
    </>
  );
};
