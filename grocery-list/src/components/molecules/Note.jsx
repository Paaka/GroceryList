import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import { updateNoteDescription, updateNoteTitle } from '../../actions/action';
import { showOutOfTransparency } from '../../animations/animations';
import ButtonImage from '../atoms/ButtonImage';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    position:relative;
    background-color:${({bgColor})=> bgColor ? bgColor : 'red'};
    border-radius:20px;
    padding:10px;
    animation: ${showOutOfTransparency} 0.2s ease-in;
`

const StyledInput = styled.input`
    font-family:'Montserrat', sans-serif;
    font-size:24px;
    max-width:90%;
    border:none;
    text-align:center;
    background-color:transparent;
    font-weight:700;
    outline:none;
`

const StyledTextarea = styled.textarea`
    width:90%;
    height:220px;

    resize:none;
    border:none;
    font-size:16px;
    margin-top:10px;
    font-family:'Montserrat', sans-serif;
    outline:none;
    background-color:transparent;
`

const StyledBtn = styled.div`
    position:absolute;
    background-color:red;
    width:20px;
    height:20px;
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    right:10px;
    bottom:10px;
`



const Note = ({noteColor, title, description, id}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();


    const updateNoteTitleHandler = (e) => {
        dispatch(updateNoteTitle(id, e.target.value));
    }

    const updateNoteDescriptionHandler = e => {
        dispatch(updateNoteDescription(id, e.target.value));
    }

    const onHoverEnterHandler = () => {
        setIsMouseOver(true);
    }

    const onHoverLeaveHandler = () => {
        setIsMouseOver(false);
    }

    const redirectToNoteView = () => {
        history.push('/note/'+id);
    }

    return <Container 
                bgColor={noteColor}
                onMouseEnter={onHoverEnterHandler}
                onMouseLeave={onHoverLeaveHandler}
            >
                <StyledInput value={title} onChange={updateNoteTitleHandler} type="text"></StyledInput>
                <StyledTextarea value={description} onChange={updateNoteDescriptionHandler}></StyledTextarea>
                <StyledBtn isVisible={isMouseOver} onClick={redirectToNoteView}/>
            </Container>
}

export default Note;