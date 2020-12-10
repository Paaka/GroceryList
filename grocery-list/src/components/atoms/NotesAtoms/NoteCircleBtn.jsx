import React from 'react';
import styled from 'styled-components';
import {showOutOfTransparency} from '../../../animations/animations';

const StyledBtn = styled.div`
    position:absolute;
    background-color:black;
    background-image: url(${({image}) => image});
    background-size:18px;
    background-position-x:center;
    background-position-y:center;
    background-repeat:no-repeat;
    border-radius:50%;
    width:40px;
    height:40px;
    display: ${props => props.isVisible ? 'flex' : 'none'};
    right:${({right})=> right + 'px'};
    bottom:${({bottom})=> bottom + 'px'};
    cursor:pointer;
    animation: ${showOutOfTransparency} 0.2s ease-in-out;
    transition: transform 0.1s ease-in-out;
    :hover{
        transform:scale(1.1);
    }
`

const NoteCircleBtn = ({bgImage,
                        bottom,
                        right,
                        isVisible,
                        onClickFn,
                        }) => <StyledBtn 
                                right={right}
                                bottom={bottom}
                                image={bgImage}
                                isVisible={isVisible}
                                onClick={onClickFn}/>

export default NoteCircleBtn;