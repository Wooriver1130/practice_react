import { Button } from '@mui/material';
import React, { useState } from 'react';

function TodoList_13(props) {

    const [todos, setTodos] = useState(["리스트1", "리스트2", "리스트3"]);
    const [newTodo, setNewTodo] = useState("") ;
    const deleteOne = (delIndex) => {
        return setTodos(todos.filter((_, index) => index !== delIndex));
    }
    const addNewList = () => { // 리스트에 새로 삽입
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo.trim()]); // 기존 todos 배열을 복사하여  새로운 정보를 가진 newTodo를 추가한다.
            setNewTodo("");
        }
    }
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((item, delIndex) => {
                    return(
                        <li key={delIndex}>
                            {item}&nbsp;&nbsp;&nbsp;
                            <Button variant="contained" onClick={() => deleteOne(delIndex)}>Delete</Button> 
                        </li>
                    );
                })}
            </ul>
            <h2>삽입할  내용: {newTodo}</h2>
            <input type="text"value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={addNewList}> Add New List</Button>
        </div>
    );
}

export default TodoList_13;