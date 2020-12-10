import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { deleteNote, updateNoteDescription, updateNoteTitle } from '../actions/action';
import NoteCircleBtn from '../components/atoms/NotesAtoms/NoteCircleBtn';
import MainTemplate from '../templates/MainTemplate';
import GoBackIcon from '../assets/SVG/go-back-arrow.svg';
import DeleteIcon from '../assets/SVG/trashbin.svg';
import EditColorIcon from '../assets/SVG/paint.svg';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:60vw;
    height:30vh;
    border-radius:20px;
    padding:10px;
    background-color : ${({noteColor}) => noteColor};
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

    const goBackHandler = () => history.push('/');

    if(note === undefined){
        return (<Redirect to="/"></Redirect>);
    }
    else{
        return(<MainTemplate>
                    <Container noteColor={note.color}>
                        <input value={note.title} onChange={udpateTitleHandler}/>
                        <textarea value={note.description} onChange={updateDescriptionHandler}/>
                        <NoteCircleBtn 
                            bgImage={EditColorIcon} 
                            isVisible={true}
                            onClickFn={deleteNoteHandler} 
                            right={110} 
                            bottom={10}/>
                        <NoteCircleBtn 
                            bgImage={DeleteIcon} 
                            isVisible={true}
                            onClickFn={deleteNoteHandler} 
                            right={60} 
                            bottom={10}/>
                        <NoteCircleBtn 
                            bgImage={GoBackIcon} 
                            isVisible={true}
                            onClickFn={goBackHandler} 
                            right={10} 
                            bottom={10}/>
                    </Container>
                </MainTemplate>);    
    }
    
}

export default SingleNoteView;