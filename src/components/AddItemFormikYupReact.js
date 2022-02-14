import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const AddItemFormikYupReact = (props) => {
    const {
        itemList,
        handleSetItemList
        } = props;
    
    const itemListMaxLength = 300;

    const addItem = (values,{resetForm}) =>{
        let tempID = Math.floor(Math.random()*itemListMaxLength);
    
        if(itemList.find((it)=>it.id === tempID)) {
            if(itemList.length !== itemListMaxLength) {
                addItem(values);
            }else {
                console.log('ERROR. NO MORE SLOTS AVAILABLE')
            }
        }else{
            handleSetItemList([
                {
                    id:tempID,
                    text:values.task,
                    isChecked: false,
                    editing:false,
                    category:values.category
                }, 
                ...itemList]
            )
            resetForm();     
        }
    };

    const validationSchema = Yup.object({
        task: Yup.string()
            .max(50,"Must be between 5 and 50 characters")
            .min(5,"Must be between 5 and 50 characters")
            .required("Required")
            .test('test', 'You need to enter letters', (value) => {
                var regExp = /[a-zA-Z]/g;
                return regExp.test(value);
              }),
        category: Yup.string()
            .required("Select category")
        });

    return (
        <Formik
            initialValues={{
                task:'', 
                category:'',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={validationSchema}
            onSubmit={addItem}
        >
        {({handleSubmit}) =>(
            <AddItemContainer className="container">
                <InputContainer className="row mb-2 justify-content-md-center">
                    <TaskText className="col-sm">
                        <Label htmlFor="task">New Task</Label><br/>
                        <Field className="px-2" name="task" placeholder="add a new task..."/>
                        <ErrorMessage name="task" component="div" className="error" />
                    </TaskText>
                    <Category className="col-auto">
                        <Label htmlFor="category">Category</Label><br/>
                        <Field className="px-2" name="category" as="select">
                            <option value="">Select</option>
                            <option value="1" >Home</option>
                            <option value="2" >Work</option>
                            <option value="3" >Shopping</option>
                        </Field>
                        <ErrorMessage name="category" component="div" className="error" />
                    </Category>
                </InputContainer>
                <Button className='row justify-content-center' onClick={handleSubmit}>
                    <span className="col-auto px-2 py-0">Add Task</span>
                </Button> 
            </AddItemContainer>
        )}
    </Formik>
    );
};

export default AddItemFormikYupReact;

const AddItemContainer = styled.div`
  position:relative;
`;

const InputContainer = styled.div`
    input{
        width:100%;
    }
    .error{
        color:red;
        font-size:0.6em;
    }
`;

const Label = styled.label`
    font-size: 30px;
    padding:2px;
`;

const TaskText = styled.div`
    font-size: 0.9em;
    input{
        border-radius:5px;
    }
`;

const Category = styled.div`
    width:auto;
    select{
        font-size: 0.9em; 
        border-radius:5px;
        background-color:white;
    }
`;

const Button = styled.div`
    font-size:0.9em;
    font-weight:bold;
    color:black;
    text-align:center;
    span{
        border:2px solid black;
        border-radius:20px;
        text-align: center;
        display:inline-block;
        background-color:rgb(255,255,255);
        :hover{
            cursor:pointer;
            background-color:lightyellow;
        }
        :active{
            transform: scale(0.9,0.9)
        }
    }
`;
