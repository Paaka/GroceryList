import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import Heading3 from '../atoms/Heading';
import Note from '../molecules/Note';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:calc(100vh-200px);
    height:94vh;
    margin-left:150px;
`;

const HeadingWrapper = styled.div`
    display:flex;
    justify-self:flex-start;
    width:100%;
    margin-top:3vh;
    margin-left:5vh;
`

const NotesGrid = styled.div`
    margin-top:3vh;
    margin-left:5vh;
    display:grid;
    grid-template-columns:repeat(5,18vw);
    grid-template-rows:repeat(2,30vh);
    grid-gap:25px;
    width:calc(100%-5vh);
    height:88vh;
`

const AllNotesWrapper = () => {
    const {fontWeights} = Fonts.montserrat;
    const Notes = useSelector(state => state.notes);

    const returnNotesOrMessage = () => {
        if(Notes.length > 0){
            return Notes.map(note =>  <Note 
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
                noteColor={note.color}/>)
        }else {
            return <h1>You don't have any notes 💔</h1>
        }
    }

    return (<Wrapper>
                <HeadingWrapper>
                    <Heading3 
                        fontSize={40}
                        fontWeight={fontWeights.bold}
                    >Notes</Heading3>     
                </HeadingWrapper>  
                <NotesGrid>
                    {returnNotesOrMessage()}
                </NotesGrid>
            </Wrapper>)
}

export default AllNotesWrapper;