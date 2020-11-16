import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleNote from '../molecules/SingleNote';

const Wrapper = styled.div`
    width:100%;
    
    display:flex;
    flex-direction:column;
    align-items:center;
`

const AllNotes = () => {
    const notes = useSelector(state => state.notes);

    return(<Wrapper>
        {notes.map(note => <SingleNote note={note} key={note.id}></SingleNote>)}
    </Wrapper>)
}

export default AllNotes;

