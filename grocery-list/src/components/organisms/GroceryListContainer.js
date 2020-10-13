import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    width:100vw;
    min-height:75vh;
    justify-content:center;
`

const ListContainter = styled.div`
    border-top:${(props) => props.firstChild ? '1px solid #ccc' : 'none'};
    width:50vw;
`

const GroceryListContainer = ({children}) => {
    const isFirstChildExist = children.length > 0;


 return(
     <Wrapper>
         <ListContainter firstChild={isFirstChildExist}>
             {children}
         </ListContainter>
     </Wrapper>
 )
}

export default GroceryListContainer;