import React from 'react';
import styled from 'styled-components';
import {RiDeleteBin6Line} from 'react-icons/ri';

const RemoveItem = (props) => {
    const{
        task,
        itemList,
        handleSetItemList
    }=props;

    const removeItem = cod => handleSetItemList(itemList.filter((item)=>item.id!==cod));
    
    return (
        <RemoveItemContainer
            className="col-auto px-2"
            onClick={()=>removeItem(task.id)}>
                <RiDeleteBin6Line/>
        </RemoveItemContainer>
    );
};

export default RemoveItem;

const RemoveItemContainer = styled.span`
        :hover{
            cursor:pointer;
            color:tomato;
        }
`;