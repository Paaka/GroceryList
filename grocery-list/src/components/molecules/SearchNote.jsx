import React from 'react';
import styled from 'styled-components';
import DivImage from '../atoms/DivImage';
import searchSvg from '../../assets/SVG/loupe.svg';

const Container = styled.div`
    height:100%;
    display:flex;
    justify-self:flex-start;
    margin-left:100px;
    align-items:center;
`

const StyledInput = styled.input`
    border:none;
    color:black;
    font-size:16px;
    outline:none;
    padding:5px;
    ::placeholder{
        color:#999;
    }
`

const SearchNote = () => {
    return (<Container>
        <DivImage
            height={16}
            width={16}
            bgSize={16}
            image={searchSvg}/>
        <StyledInput type="text" placeholder="Search"></StyledInput>
    </Container>);
}

export default SearchNote;