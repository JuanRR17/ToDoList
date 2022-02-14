import React from 'react';
import styled from 'styled-components';
import {MdOutlineDoneOutline} from 'react-icons/md';

const TaskCheck = (props) => {
    const{
        task,
        text,
        itemList,
        handleSetItemList,
    } = props;
    
    const checkItem = () =>{
        const index = itemList.findIndex((it)=>it.id===task.id);
        const newTask=Object.assign(task,
        {isChecked:!task.isChecked, text:text});
        itemList.splice(index,1,newTask);
        handleSetItemList([...itemList]);
    };

    return (
        <Check className="col-auto px-2" onClick={()=>checkItem()}>
            <MdOutlineDoneOutline/>
        </Check>
    );
};

export default TaskCheck;

const Check = styled.span`
        :hover{
            cursor:pointer;
            color:lightgreen;
        }
`;