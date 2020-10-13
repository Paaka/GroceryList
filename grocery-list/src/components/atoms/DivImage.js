import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:40px;
    height:40px;
    padding:5px;
    border-radius:8px;
    background-color:white;
    background-size:30px;
    background-repeat:no-repeat;
    background-position-x:center;
    background-position-y:center;
    background-image: url(${(props) => props.image});
`

const DivImage = ({image}) =>  <Container image={image}/>

export default DivImage;