import React from "react";
import { IoIosAlert } from "react-icons/io";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { MdAdd } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { FaSunPlantWilt } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { TiShoppingBag } from "react-icons/ti";
import { useSelector } from "react-redux";


export const FirstColumn = () => {


    const mode = useSelector((state) => state.togglemode.value);



  return (
    <>
      <section className={`space-y-5  ${mode === "dark-mode" ? "first-column1" : "first-column" }`}>
        <div className="">
          <div className="">
            <div className="img">
              <img src="/girl.jpeg " alt="image" className="img-girl"/>
            </div>
            <h1 className="font-bold text-center">Hey ABCD</h1>
          </div>
        </div>

        <div className={` ${mode === "dark-mode" ? "small-box1" : "small-box"}`}>
          <List className="">
            <ListItem className= "tasks-list">
            <GiNotebook className="icon" />
            All Tasks</ListItem>
            <ListItem className="tasks-list">
            <TiShoppingBag className="icon"/>
            Today</ListItem>
            <ListItem className="tasks-list">
            <FaRegStar className="icon"/>
            Important</ListItem>
            <ListItem className="tasks-list">
            <FaSunPlantWilt className="icon"/>
            Planned</ListItem>
            <ListItem className="tasks-list">
            <MdAssignmentAdd className="icon"/>
            Assigned to me</ListItem>
          </List>
        </div>
        {/* ************ add list****** */}
        <div className={` ${mode === "dark-mode" ? "small-box1" : "small-box"}`}>
          <ul className="flex items-center ">
            <li><MdAdd className="text-6xl icon"/></li>
            <li>Add list</li>
          </ul>
        </div>

        {/* ********Today task*** */}

        <div className={`p-2 ${mode === "dark-mode" ? "small-box1" : "small-box"}`}>
          <ul className="flex items-center justify-between">
            <li>
              <ul className="">
                <li>Today Task</li>
                <li>11</li>
               
              </ul>
            </li>
           
            <li>
                  
                  <IoIosAlert className="text-slate-400"/>
                </li>
          </ul>

          <div className={` ${mode === "dark-mode" ? "circle1" : "circle"}`}>
           
        </div>

        <List className="nav">
          <ListItem>Pending</ListItem>
          <ListItem>Done</ListItem>
        </List>

        </div>

      </section>
    </>
  );
};
