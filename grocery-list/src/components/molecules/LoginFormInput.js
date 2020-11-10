import React from 'react';
import styled from 'styled-components';
import DivImage from '../atoms/DivImage';

import Fonts from '../../constants/fonts';
import colors from '../../constants/colors';

const {montserrat} = Fonts;

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    margin:15px auto;
`

const StyledInput = styled.input`
    border:none;
    outline:none;
`

const ImageAndInputContainer = styled.div`
    display:flex;
    border-bottom:2px solid #ccc;
    transition:all 0.2s ease-in;

    &:focus-within{
        border-bottom:2px solid ${colors.gradientSecondary};
    }
`

const StyledLabel = styled.label`
    align-self:flex-start;
    font-family:${montserrat.fontName};
    font-weight:${montserrat.fontWeights.bold};
    font-size:12px;
    color:#666;
`


const LoginFormInput = ({label, placeholder, inputType, inputValue, setInputFn, image}) => {

    const updateInputValueHanlder = (e) => {
        setInputFn(e.target.value);
    };

    return(
        <Wrapper>
            <StyledLabel>{label}</StyledLabel>
            <ImageAndInputContainer>
            <DivImage image={image} height={25} width={25} bgSize={20}/>
            <StyledInput type={inputType} placeholder={placeholder} value={inputValue} onChange={updateInputValueHanlder}/>
            </ImageAndInputContainer>
        </Wrapper>
    )    
}

export default LoginFormInput;