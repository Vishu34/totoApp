import React, { useEffect } from "react";
import { IoListSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

import { darkMode, lightMode } from "./redux/ModeSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.togglemode.value);

  console.log(mode)


 

  useEffect(() => {
    
    document.body.className = mode ==="dark-mode" ? 'dark-mode' : 'light-mode';
  }, [mode]);

  



  const toggleDarkMode = () => {
    dispatch(darkMode());
  };

  const toggleLightMode = () => {
    dispatch(lightMode());
    
  };














  
  return (
    <>
      <section>
        <nav className="navbar">
          <ul className="right-nav">
            <li>
              <IoListSharp className="text-xl" />
            </li>
            <li className="dolt">Dolt</li>
          </ul>
          <ul className="left-nav">
            <li>
              <FaSearch className="text-xl" />
            </li>
            <li>
              <CiGrid41 className="text-xl" />
            </li>
            {
                mode === "light-mode" ? (
              <li onClick={toggleDarkMode}>
                <MdOutlineDarkMode className="text-xl cursor-pointer" />
              </li>
            ) : (
              <li onClick={toggleLightMode}>
                <CiLight className="text-xl cursor-pointer" />
              </li>
            )
            }
          </ul>
        </nav>
      </section>
    </>
  );
};
