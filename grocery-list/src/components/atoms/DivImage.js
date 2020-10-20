import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:${props => props.width ? props.width + 'px' : '40px'};
    height:${props => props.height ? props.height + 'px' : '40px'};
    padding:5px;
    border-radius:8px;
    background-color:white;
    background-size:${props => props.width ? props.width + 'px' : '30px'};
    background-repeat:no-repeat;
    background-position-x:center;
    background-position-y:center;
    background-image: url(${(props) => props.image});
`

const DivImage = ({
                    image,
                    height,
                    width, 
                    bgSize
                }) =>  <Container 
                        image={image} 
                        height={height}
                        width={width}
                        bgSize={bgSize}/>

export default DivImage;