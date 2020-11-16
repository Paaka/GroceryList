import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
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
    const noteIDFromPath = parseInt(useLocation().pathname.split('/')[2]);
    const [note] = useSelector(state => state.notes).filter(note => note.id === noteIDFromPath);

    if(note === undefined){
        return (<Redirect to="/"></Redirect>);
    }
    else{
        return(<MainTemplate>
                    <Container>
                        <input value={note.title}/>
                        <textarea value={note.description}/>
                        <Link to="/">Save</Link>
                    </Container>
                </MainTemplate>);    
    }
    
}

export default SingleNoteView;