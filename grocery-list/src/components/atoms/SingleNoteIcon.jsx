import React from 'react';
import styled from 'styled-components';
import tickSVG from '../../assets/SVG/tick.svg';
import tickWhiteSVG from '../../assets/SVG/tickWhite.svg';

const SelectedIcon = styled.div`
    position: absolute;
    top:-5px;
    left:-5px;
    height:15px;
    width:15px;
    border-radius:100%;
    opacity:${({showComponent, isSelected})=> showComponent ? 1 : 0 || isSelected ? 1 : 0};
    transition: opacity, background 0.2s ease-in;
    border:1px solid black;
    background-color:${({isSelected})=> isSelected ? 'black':'white'};
    background-image:url(${({isSelected})=> isSelected ? tickWhiteSVG : tickSVG});
    background-size:10px;
    background-position-x:center;
    background-position-y:center;
    background-repeat:no-repeat;
`

const SingleNoteIcon = ({showComponent, selectNoteFn, isSelected}) => {

    const selectNote = e => {
        e.preventDefault();
        selectNoteFn();
    }

    return <SelectedIcon 
                showComponent={showComponent} 
                onClick={selectNote}
                isSelected={isSelected}></SelectedIcon>
}

export default SingleNoteIcon;