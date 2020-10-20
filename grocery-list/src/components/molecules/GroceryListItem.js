import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import ButtonImage from '../atoms/ButtonImage';
import DivImage from '../atoms/DivImage';

import DeleteIcon from '../../assets/SVG/delete.svg';
import DefaultItemImage from '../../assets/SVG/shopping-bag.svg';
import { deleteItemFromGroceryList } from '../../actions/action';

const Wrapper = styled.div`
    display:flex;
    border-bottom:1px solid #ccc;   
    background-color:#eee;
    align-items:center;
    padding:10px;
    justify-content:space-around;
`

const GroceryListItem = ({listItem}) => {

    const dispatch = useDispatch();

    const deleteItemHandler = () => {
        dispatch(deleteItemFromGroceryList(listItem.id));
    }

    return(
        <Wrapper>
            <DivImage image={DefaultItemImage} />
            <p>{listItem.title}</p>
            <ButtonImage image={DeleteIcon} onClickFn={deleteItemHandler}/>
        </Wrapper>
    );
}

export default GroceryListItem;