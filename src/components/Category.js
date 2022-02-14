import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

const Category = (props) => {
    const{
        task,
        itemList,
        handleSetItemList,
    } = props;

    const formik = useFormik({
        initialValues:{
            category:task.category,
            },
        onSubmit: (values) => {
            const index = itemList.findIndex((it)=>it.id===task.id);
            const newTask=Object.assign(task,
            {category:values.category});
            itemList.splice(index,1,newTask);
            handleSetItemList([...itemList]);
            }
        },
    );

    return (
        <CategoryContainer
            className="col-auto px-0"
            id="category"
            name="category"
            type="category"
            onChange={(e) => {formik.setFieldValue('category',e.target.value)}}
            value={formik.values.category}
            >
            <option value="1" >Home</option>
            <option value="2" >Work</option>
            <option value="3" >Shopping</option>
        </CategoryContainer>
    );
};

export default Category;

const CategoryContainer = styled.select`
    height:30px;
    font-size:25px;
    border-width:0px;
    border-radius:10px;
    background-color: lightyellow;
    text-align:center;
`;