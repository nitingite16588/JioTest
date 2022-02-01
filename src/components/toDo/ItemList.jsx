
import React, { useState, useEffect, useMemo } from "react";
import DeleteIcon from '../../img/delete.jpg'

const ItemList = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage, setTodosPerPage] = useState(4);
    const [pageNumbers, setPageNumbers] = useState([]);

    const [currentTodos, setCurrentTodos] = useState([]);

    const updatePagination = () => {
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = props.listItem.slice(indexOfFirstTodo, indexOfLastTodo);
        setCurrentTodos(currentTodos) // final item per page
    }
    const updatePagenumber = () => {
        const pageNo = [];
        for (let i = 1; i <= Math.ceil(props.listItem.length / todosPerPage); i++) {
            pageNo.push(i);
        }
        setPageNumbers(pageNo)
    }

    useMemo(() => {   // call before render
        updatePagination()
        updatePagenumber()

    }, [props.listItem])



    const paginationClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

    useEffect(() => {  //call back after  paginationClick
        updatePagination()
    }, [currentPage]);

    return (
        <>

            <ul className="list-group">
                {currentTodos.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        <div className="list-detail" >
                            <div >{item.text}</div>
                            <div>Rating</div>
                            <div onClick={() => props.removeTodo(item.id)}> <img className="delete-icon" src={DeleteIcon} /> </div>
                        </div>
                    </li>
                ))
                }
                {currentTodos.length === 0 &&
                    <li className="list-group-item"> No item found !! </li>
                }
            </ul>
            <ul id="page-numbers">
                {pageNumbers.map(number => {
                    return (
                        <li
                            tabindex={number}
                            key={number}
                            id={number}
                            onClick={paginationClick}
                        >
                            {number}
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default ItemList