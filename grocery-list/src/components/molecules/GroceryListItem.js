import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import ButtonImage from '../atoms/ButtonImage';
import DivImage from '../atoms/DivImage';

import DeleteIcon from '../../assets/SVG/delete.svg';
import DefaultItemImage from '../../assets/SVG/shopping-bag.svg';
import CheckIcon from '../../assets/SVG/check.svg';
import { deleteItemFromGroceryList, updateItemTitleInGroceryList, updateItemCompletionInGroceryList } from '../../actions/action';

const Wrapper = styled.div`
    display:flex;
    border-bottom:1px solid #ccc;   
    background-color:#eee;
    align-items:center;
    padding:10px;
    justify-content:space-around;
`

const FlexContainer = styled.div`
    display:flex;
`

const GroceryListItem = ({listItem}) => {

    const [title,setTitle] = useState(listItem.title);

    const dispatch = useDispatch();

    const deleteItemHandler = () => {
        dispatch(deleteItemFromGroceryList(listItem.id));
    }

    const updateItemHandler = (e) => {
        dispatch(updateItemTitleInGroceryList(listItem.id, e.target.value));
        setTitle(e.target.value);
    }

    const markAsDoneHandler = () => {
        dispatch(updateItemCompletionInGroceryList(listItem.id));
    }

    return(
        <Wrapper>
            <DivImage image={DefaultItemImage} />
            <input type="text" value={title} onChange={updateItemHandler}/>
            <FlexContainer>
                <ButtonImage image={CheckIcon} onClickFn={markAsDoneHandler}/>
                <ButtonImage image={DeleteIcon} onClickFn={deleteItemHandler}/>
            </FlexContainer>
        </Wrapper>
    );
}

export default GroceryListItem;