import React from 'react';
import styled from 'styled-components';

import DefaultItemImage from '../../assets/SVG/shopping-bag.svg';

import DivImage from '../atoms/DivImage';

const Wrapper = styled.div`
    display:flex;
    border-bottom:1px solid #ccc;   
    background-color:#eee;
    align-items:center;
    padding:10px;
    justify-content:space-around;
`

const GroceryListItem = ({listItem}) => {
return(
    <Wrapper>
        <DivImage image={DefaultItemImage} />
        <p>{listItem.title}</p>
    </Wrapper>
    );
}

export default GroceryListItem;