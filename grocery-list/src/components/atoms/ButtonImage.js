import React from 'react';
import styled from 'styled-components';
import DivImage from './DivImage';

const BtnImage = styled.div`
    width:${props => props.width ? props.width + 'px' : '40px'};
    height:${props => props.height ? props.height + 'px' : '40px'};
    padding:5px;
    border-radius:0px;
    background-size:${props => props.width ? props.width + 'px' : '30px'};
    background-repeat:no-repeat;
    background-position-x:center;
    background-position-y:center;
    background-image: url(${(props) => props.image});
    transition: ease-in all 0.25s;

    &:hover{
        background-color:${props => props.hoverBgColor ? props.hoverBgColor : 'white'};
        border-radius:50px
    }

    &:active{
        background-color:#ddd;
    }

`;


const ButtonImage = ({image, onClickFn, hoverBgColor}) => {
    const onClickHandler = () => {
       onClickFn();
    }

    return <BtnImage image={image} hoverBgColor={hoverBgColor} onClick={onClickHandler}></BtnImage>
}

export default ButtonImage;