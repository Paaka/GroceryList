import styled from 'styled-components';
import Fonts from '../../constants/fonts';

const GradientButton = styled.button`
    font-size:18px;
    font-family:${Fonts.montserrat.fontName}, sans-serif;
    font-weight:${Fonts.montserrat.fontWeights.regular};
    text-transform:uppercase;
    padding:7px 20px;
    margin:5px;
    border:none;
    border-radius:20px;
    color:${props => props.color ? props.color : 'black'};
    background-image: linear-gradient(to right,
    ${props => props.firstGradientColor ? props.firstGradientColor : 'orangered'},
    ${props => props.secondGradientColor ? props.secondGradientColor : 'red'});
    transition:transform 0.25s ease-in;
    outline:none;
    cursor: pointer;

    &:hover{
        transform:scale(1.05);
    }

    &:active{
        transform:scale(0.95);
    }
`

export default GradientButton;