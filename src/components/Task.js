import React, {useState} from 'react'
import Category from './Category';
import EditButton from './EditButton';
import RemoveItem from './RemoveItem';
import TaskCheck from './TaskCheck';
import TaskText from './TaskText';
import styled from 'styled-components';


const Task = (props) => {
    const {
        task,
        itemList,
        handleSetItemList
    } = props;
    
    const [editing, setEditing] = useState();
    const [text, setText] = useState(task.text);

    return (
        <Frame 
        className="container py-2 my-1"
        color={task.isChecked ? 'red' : 'black'}
        background={task.isChecked ? 'lightgreen' : 'lightblue'}
        hover={task.isChecked ? 'green' : 'cadetblue'}
        >
            <div className="row px-2 align-items-center">
                <TaskCheck 
                    task={task}
                    text={text}
                    itemList={itemList}
                    handleSetItemList={handleSetItemList}
                    />
                <TaskText 
                    task={task}
                    editing={editing}
                    text={text}
                    handleSetText={(value)=>setText(value)}
                />
                <EditButton 
                    editing={editing}
                    handleSetEditing={(value)=>setEditing(value)}
                    />
                <Category 
                    task={task}
                    itemList={itemList}
                    handleSetItemList={handleSetItemList}
                />
                <RemoveItem 
                    task={task}
                    itemList={itemList}
                    handleSetItemList={handleSetItemList}
                />
            </div>
        </Frame>
        );    
};

export default Task;

const Frame = styled.li`
  color: ${props => props.color};
  list-style:none;
  border-radius: 20px;
  border: 2px solid black;
  background-color: ${props => props.background};
    :hover{
        background-color:${props => props.hover};
    }
    span{
        :active{
            transform: scale(0.8,0.8)
        }
    }
`;