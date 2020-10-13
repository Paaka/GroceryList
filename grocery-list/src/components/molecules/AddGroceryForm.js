import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {addItem} from '../../actions/action';

const AddGroceryForm = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const addItemHandler = () => {
        dispatch(addItem(inputValue));
        setInputValue('');
    }

    const setInputHandler = (e) => {
        setInputValue(e.target.value);
    }


    return(
    <div>
        <button onClick={addItemHandler}>+</button>
        <input type='text' label="Add Product" value={inputValue} onChange={setInputHandler}></input>
    </div>
    );
}

export default AddGroceryForm;