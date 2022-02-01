import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hooks from '../hooks/Hooks'



//const RouteComponent :React.FC<IMyProps>= (props:IMyProps) => {
const RouteComponent =() => {
  return (
    <BrowserRouter>
      <ul>
        <li> <Link to="/" element={<Hooks  />}>Home </Link ></li>
        <hr />
      </ul>
      <Routes>
        <Route path="/" element={<Hooks />}>  </Route >
      </Routes>
    </BrowserRouter>
  );
};
export default RouteComponent;
