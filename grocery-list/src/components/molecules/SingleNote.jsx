import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { updateNoteIsSelected } from '../../actions/action';
import Heading3 from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import SingleNoteIcon from '../atoms/SingleNoteIcon';

const Container = styled.div`
    border:${({isSelected})=> isSelected ? '2px solid black' : '1px solid #ccc'};
    width:50vw;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding:10px;
    margin-top:5px;
    transition: border 0.2s ease-in;
    cursor: pointer;
    position: relative;

    &:hover{
        border:${({isSelected})=> isSelected ? '2px solid black' : '1px solid #333'};
    }
`;


const SingleNote = ({note}) => {
    const dispatch = useDispatch();
    const {title, description,id} = note;
    const [isMouseOverNote, setIsMouseOverNote] = useState(false);

    const hoverHandler = e => {
        setIsMouseOverNote(true);
    }

    const leaveHandler = e => {
        setIsMouseOverNote(false);
    }

    const selectNote = e => {
        dispatch(updateNoteIsSelected(note.id, !note.isSelected));
    }

    return(<Link to={`/note/${id}`} style={{textDecoration:'none', color:"inherit"}}>
        <Container onMouseOver={hoverHandler} onMouseLeave={leaveHandler} isSelected={note.isSelected}>
            <SingleNoteIcon 
                showComponent={isMouseOverNote}
                selectNoteFn={selectNote}
                isSelected={note.isSelected}/>
            <Heading3 fontWeight={700}>{title}</Heading3>
            <Paragraph size="14px">{description}</Paragraph>
        </Container>
        </Link>)
}

export default SingleNote;