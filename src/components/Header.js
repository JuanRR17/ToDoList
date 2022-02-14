import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <ToDoHeader>
            To Do List
        </ToDoHeader>
    )
}

export default Header;

const ToDoHeader = styled.div`
  position:relative;
  padding:20px;
  text-align: center;
  display:block;
  font-size:2em;
  text-decoration: underline;
`;