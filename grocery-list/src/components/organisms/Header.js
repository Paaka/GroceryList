import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:10vh;
    border-bottom:2px solid #333;
`

const Header = () => {
    const title = useSelector(state => state.listTitle);
    return(<Wrapper>{title}</Wrapper>)
}

export default Header;