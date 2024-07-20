import React from "react";
import { Navbar } from "../Components/Navbar";
import { FirstColumn } from "../Components/FirstColumn";
import { MidColumn } from "../Components/MIdColumn";
import { LastColumn } from "../Components/LastColumn";
import { List, ListItem } from "@mui/material";

export const Home = () => {
  return (
    <>
      <section>
        <Navbar />

        <nav className="flex items-start p-5 h-[100%] w-[100%] gap-2 ">
         
              <FirstColumn />
           
              
              <MidColumn />
            
              <LastColumn />
         
        
        </nav>
      </section>
    </>
  );
};
