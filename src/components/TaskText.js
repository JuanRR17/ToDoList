import React, {useState,useRef} from 'react';
import styled from 'styled-components';

const TaskText = (props) => {
    const{
        text,
        handleSetText,
        task,
        editing
    } = props;
    
    const edit = useRef(null);
    const [inputText, setInputText] = useState(text);

    return (
        <Text className="col-sm">
            {editing ? 
            <input className='px-2 py-0' type="text" ref={edit} value={inputText} 
                onChange={()=>
                    setInputText(edit.current.value)
                }
                onBlur={()=>
                    handleSetText(inputText)
                }
            />
             : 
             (task.isChecked ? <s>{text}</s> : text)}
        </Text>
    );
};

export default TaskText;

const Text = styled.div`
    font-size:1em;
    input{
        font-size:0.8em;
        width:100%;
    }
`;