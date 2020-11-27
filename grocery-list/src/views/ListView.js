import React from 'react';

import MainTemplate from '../templates/MainTemplate';
import MainForm from '../components/organisms/MainForm';
import AllNotes from '../components/organisms/AllNotes';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AllNotesWrapper from '../components/organisms/AllNotesWrapper';



const ListView = ({children}) => {
    return(
        <MainTemplate>
            {/* <MainForm></MainForm>
            <AllNotes></AllNotes>
            {children} */}
            <AllNotesWrapper></AllNotesWrapper>

        </MainTemplate>
    );
}

export default ListView;