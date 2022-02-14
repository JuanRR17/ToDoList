import React from 'react';
import Task from './Task';
import styled from 'styled-components';

const TaskList = (props) => {
    const {
        itemList,
        handleSetItemList
    } = props;

    return (
        <TaskListContainer className="p-3">
            {itemList.filter((item)=>item.isChecked===false).map(item => (
                <Task 
                    key={item.id}
                    task={item}
                    itemList={itemList}
                    handleSetItemList={handleSetItemList}
                />
                    )
                )
            }
            {itemList.filter((item)=>item.isChecked===true).map(item => (
                <Task 
                    key={item.id}
                    task={item}
                    itemList={itemList}
                    handleSetItemList={handleSetItemList}
                />
                    )
                )
            }
        </TaskListContainer>
    );
};

export default TaskList;

const TaskListContainer = styled.div`
    position:relative;
    text-align: left;
`;
