import styled from 'styled-components';
import Fonts from '../../constants/fonts';

const Paragraph = styled.p`
    font-family:${Fonts.montserrat.fontName}, sans-serif;
    font-size:${props => props.size ? props.size : '16px'};
    margin:${props => props.marginVertical ? props.marginVertical : 0} ${props => props.marginHorizontal ? props.marginHorizontal : 0};
    padding:0;
`

export default Paragraph;