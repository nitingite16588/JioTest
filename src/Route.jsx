import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from './components/counter/Counter';
import Home from './components/home/Home';
import Form from './components/form/Form.jsx';
import Hooks from './components/hooks/Hooks';
import EXAMPLE1 from './components/hooks/example1';
import USE_REDUCER from './components/hooks/useReducerExcample';
import CONTEXT from './components/use-context/contextExample';
import MEMO from './components/memo/parentComponent';
import TypeExample from './components/TypeScript/TypeExample';

const RouteComponent = (props) => {
  return (
    <BrowserRouter>
      <ul>
        <li> <Link to="/" element={<Home />}>Home </Link ></li>
        <li> <Link to="/counter" element={<Counter />} >Counter Class Component </Link ></li>
        <li> <Link to="/form" element={<Form />} >Form Class Component </Link ></li>
        <li> <Link to="/hook" element={<Hooks />} >Hooks Component </Link ></li>
        <li> <Link to="/example1" element={<EXAMPLE1 />} >Hooks example1 </Link ></li>
        <li> <Link to="/usereducer" element={<USE_REDUCER />} >usereducer </Link ></li>
        <li> <Link to="/context" element={<CONTEXT />} >context </Link ></li>
        <li> <Link to="/memo" element={<MEMO />} >memo </Link ></li>
        <li><Link to="/type" element={<TypeExample/>}> type </Link></li>


        <hr />
      </ul>
      <Routes>
        <Route path="/" element={<Home />}>  </Route >
        <Route path="/counter" element={<Counter />}></Route >
        <Route path="/form" element={<Form />}> </Route >
        <Route path="/hook" element={<Hooks />}>  </Route >
        <Route path="/example1" element={<EXAMPLE1 />}>  </Route >
        <Route path="/usereducer" element={<USE_REDUCER />}>  </Route >
        <Route path="/context" element={<CONTEXT />}>  </Route >
        <Route path="/memo" element={<MEMO />}>  </Route >
        <Route path="/type" element={<TypeExample />}>  </Route >
        
      </Routes>
    </BrowserRouter>
  );
};
export default RouteComponent;
