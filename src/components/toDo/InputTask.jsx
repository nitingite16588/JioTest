
import React, { useState } from "react";

const ToDoInput = (props) => {
    const [input, setInput] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    const handleChange = e => {
        setInput(e.target.value);
        props.searchHandler(e.target.value)
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <input type="text"
                value={input}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your todo task"
                id="input" />

        </form>
    );

}

export default React.memo(ToDoInput)