import React, { useState, useCallback } from "react";
import InputTask from './InputTask';
import ItemList from './ItemList';


const ToDo = () => {

    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('')


    /* add item to todo list */
    const addTodo = useCallback((newItem) => {  // useCallback to avoid re rendering of <InputTask> component
        setSearch('');
        if (!newItem.text || /^\s*$/.test(newItem.text)) {
            return;
        }
        let index = todos.findIndex(item => {  /* check if item already present in todo list */
            return item.text === newItem.text;
        })

        if (index >= 0) {
            alert(newItem.text + " Already in Todo List !! ")
            return false
        }
        const newTodos = [newItem, ...todos];
        setTodos(newTodos);

    }, [search]);


    /* remove  item from todo list */
    const removeTodo = (id) => {
        if(confirm("Are you sure you want to delete?")) {
            let updateTodo = todos.filter(item => {
                return item.id !== id
            })
            setTodos(updateTodo);
        }
    }


    const searchHandler = useCallback((val) => {   /* useCallback to avoid re rendering of <InputTask> component */
        setSearch(val)
    }, [search])

    /* filter existing todo list while typing */
    const filteredTodo = search.length === 0 ? todos : todos.filter(item => item.text.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="container">
            <div className="toDo-center">
                <div className="card-header todo-Title">Todo List</div>
                <InputTask onSubmit={addTodo} searchHandler={searchHandler} />
                <ItemList
                    listItem={filteredTodo}
                    removeTodo={removeTodo}

                />


            </div>

        </div>
    );

}

export default ToDo