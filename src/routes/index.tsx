import React from "react";
import { Route, Routes } from "react-router-dom";
import  Home  from "../views/home";
import User  from "../views/users";
import { SingleTask } from "../views/singletask";

export const RoutesApp = () => {
  return(
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/task/:id" element={<SingleTask/>}/>
        <Route path="/users" element={<User/>}/>
      </Routes>
    
  )
}
export default RoutesApp;