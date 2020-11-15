import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {addNote as add_note} from '../../actions/action';

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

const AddNoteForm = ({closeNoteFormFn}) => {
    const dispatch = useDispatch();
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescripiton] = useState('');

    const setValue = (e, theCorrectFn) => {
        theCorrectFn(e.target.value);
    }

    const cleanNoteForm = () => {
        setNoteDescripiton('');
        setNoteTitle('');
        closeNoteFormFn();
    }

    const addNote = () => {
        if(noteTitle !== ''){
            dispatch(add_note(noteTitle, noteDescription));
            cleanNoteForm();
        }
    }

    return(<Container>
        <input 
             value={noteTitle} 
             onChange={(e)=>setValue(e, setNoteTitle)}
             />
        <textarea 
             value={noteDescription}
             onChange={(e)=> setValue(e, setNoteDescripiton)}></textarea>
        <button onClick={addNote}>Add note</button>
    </Container>)
}

export default AddNoteForm;