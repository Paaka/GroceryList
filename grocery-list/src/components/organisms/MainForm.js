import React, {useState} from 'react';
import styled from 'styled-components';
import AddNoteForm from '../molecules/AddNoteForm';

const Wrapper = styled.div`
    width:50%;
    margin:2px auto;
    padding:10px;
    border:1px solid black;
`

const MainForm = () => {
    const [isNoteFormOpen, setIsNoteFormOpen] = useState(false);

    const toggleNoteForm = () => {
        setIsNoteFormOpen(!isNoteFormOpen);
    }

    return (<Wrapper>
        <p onClick={toggleNoteForm}>Add items</p>
        {isNoteFormOpen ? <AddNoteForm closeNoteFormFn={toggleNoteForm}/> : null}
    </Wrapper>);
};

export default MainForm;