import React from 'react';
import styled from 'styled-components';
import Fonts from '../../constants/fonts';

const StyledHeading = styled.h3`
    font-family:${Fonts.montserrat.fontName}, sans-serif;
    font-weight:${props => props.fontWeight ? props.fontWeight : Fonts.montserrat.fontWeights.regular};
    font-size:${props => props.fontSize ? props.fontSize + "px" : '20px'};
    margin:0;
    padding:0;
    text-transform:${props => props.textTransform ? props.textTransform : 'none'};
`
const Heading3 = ({
                fontSize,
                fontWeight,
                textTransform,
                children,
                }) => <StyledHeading 
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        textTransform={textTransform}
                        >{children}</StyledHeading>

export default Heading3;