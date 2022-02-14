import React from 'react';
import {FiEdit3} from 'react-icons/fi';
import {MdOutlineDone} from 'react-icons/md';
import styled from 'styled-components';

const EditButton = (props) => {
    const{
        editing,
        handleSetEditing
    } = props;
    
    const edit = () =>{
        handleSetEditing(!editing);
    };

    return (
        <Edit className="col-auto px-2" onClick={()=> edit()}>
            {
                editing ? <MdOutlineDone/> : <FiEdit3/>
            }
        </Edit>
    )
}

export default EditButton;

const Edit=styled.span`
    display:inline;
    box-sizing:border-box;
    border-radius:20%;
    text-align:center;
        :hover{
        cursor:pointer;
        color:orange;
        }
`;