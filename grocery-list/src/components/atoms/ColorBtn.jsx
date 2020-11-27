import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { showOutOfTransparency } from '../../animations/animations';

const Wrapper = styled.div`
    width:20px;
    height:20px;
    background-color:${props => props.bgColor};
    border-radius:50%;    
    margin-top:20px;
    transition:transform 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    cursor: pointer;
    animation:${showOutOfTransparency} 0.3s ease-in-out;
    animation-delay:${props => props.delay + 's'};
    visibility:${props => props.show ? 'visible' : 'hidden'};

    :hover{
        transform:scale(2);
    }
`

const ColorBtn = ({bgColor, delay}) => {
    const [isColorVisible, setIsColorVisible] = useState(false);
    
    useEffect(()=>{
        setIsColorVisible(false);
    },[])

    const changeVisibility = () => setIsColorVisible(true);

    return <Wrapper
                delay={delay}
                bgColor={bgColor} 
                onAnimationStart={changeVisibility}
                show={isColorVisible}/>
}

export default ColorBtn;