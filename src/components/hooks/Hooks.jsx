import React, { useState, useEffect, useMemo } from "react";

import INPUT from '../UI/Field';


let var1 = "variable1"



const UserForm  = () => {
  const [count, setCout] = useState(0);
  const [name, setName] = useState("xyz");


  const [todo, setTodo] = useState("");


  const [details, setDetails] = useState("");

  let xyz = "Myapp"
  useMemo(() => { // can be use like component will mount
    console.log("use memo")
  }, []);

  const add = (a, b) => {
    return a + b;

  }

  const increment = (arg) => {
    setCout(count + 1);
    let sum = add(1, 3)
  };

  const updateName = () => {
    setName("nitin");
  };

  useEffect(() => {
    console.log("first hook");
    document.title = `You click ${count} times`;
    return () => {
      console.log("in clean up hooks");
    };
  }, []);



  return (
    <div>
      {xyz}
      <p>You click {count} times</p>
      <button onClick={increment.bind(this, "count")}>increment</button>
      <button onClick={updateName.bind(this, "name")}>update</button>
      <p>Name: {name} </p>
      <hr />

      <INPUT todo={todo} setTodo={setTodo}/>

      {/* <span>category :{details.category}</span> */}
    </div>
  );
};

export default UserForm;
