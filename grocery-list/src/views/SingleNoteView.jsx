import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { deleteNote, updateNoteDescription, updateNoteTitle } from '../actions/action';
import MainTemplate from '../templates/MainTemplate';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:60vw;
    height:30vh;
    border: 2px solid #ccc;
    padding:10px;
`

const SingleNoteView = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const noteIDFromPath = parseInt(useLocation().pathname.split('/')[2]);
    const [note] = useSelector(state => state.notes).filter(note => note.id === noteIDFromPath);

    const udpateTitleHandler = (e) => {
        dispatch(updateNoteTitle(noteIDFromPath,e.target.value));
    }

    const updateDescriptionHandler = e => {
        dispatch(updateNoteDescription(note.id, e.target.value));
    }

    const deleteNoteHandler = () => {
        dispatch(deleteNote(note.id));
        history.push('/');
    }

    if(note === undefined){
        return (<Redirect to="/"></Redirect>);
    }
    else{
        return(<MainTemplate>
                    <Container>
                        <input value={note.title} onChange={udpateTitleHandler}/>
                        <textarea value={note.description} onChange={updateDescriptionHandler}/>
                        <Link to="/">Save</Link>
                        <button onClick={deleteNoteHandler}>Delete</button>
                    </Container>
                </MainTemplate>);    
    }
    
}

export default SingleNoteView;