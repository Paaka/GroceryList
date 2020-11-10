import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Heading3 from '../atoms/Heading';
import ButtonImage from '../atoms/ButtonImage';
import MoreSVG from '../../assets/SVG/more.svg';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    align-items:center;
    justify-content:center;
    width:100vw;
    height:10vh;
    border-bottom:2px solid #333;
`

const Header = () => {
    const title = useSelector(state => state.listTitle);
    
    const moreOptionsHandler = () =>{
        console.log('wincy opcji');
    }

    return(
        <Wrapper>
            <ButtonImage hoverBgColor="#eee" image={MoreSVG} onClickFn={moreOptionsHandler}/>
            <Heading3>{title}</Heading3> 
        </Wrapper>
        );
}

export default Header;