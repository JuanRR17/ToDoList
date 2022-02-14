import React, {useState} from 'react';
import AddItemFormikYupReact from './components/AddItemFormikYupReact';
import Header from './components/Header';
import TaskList from './components/TaskList';
import styled from 'styled-components';

const ToDoList = ({}) => {
    document.title = "To Do List";
    const [itemList, setItemList] = useState([]);
    
    return (
        <Frame className="col-11 my-2 mx-auto">
            <Header/>
            <AddItemFormikYupReact
                itemList={itemList}
                handleSetItemList={(value)=>setItemList(value)}
            />
            <TaskList
                itemList={itemList}
                handleSetItemList={(value)=>setItemList(value)}
            />
        </Frame>
    );
};

export default ToDoList;

const Frame = styled.div`
    color:black;
    position:relative;
    background-color:lightgrey;
    border: 5px solid white;
    font-size:35px;
    box-shadow:0px 0px 20px #777;
    border-radius:30px;
`;