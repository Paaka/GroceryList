import React from 'react';
import styled from 'styled-components';
import Heading3 from '../atoms/Heading';

const Container = styled.div`
    background-color:${({bgColor})=> bgColor ? bgColor : 'red'};
    border-radius:20px;
    padding:10px;
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



const Note = ({noteColor}) => {
    const notex = {title:'Title', description:'This is a Keeper note.'}
    const {title, description} = notex;

    return <Container 
                bgColor={noteColor}
            >
                <StyledInput value={title} type="text"></StyledInput>
                <StyledTextarea value={description}></StyledTextarea>
            </Container>
}

export default Note;