import React from 'react';

import MainTemplate from '../templates/MainTemplate';
import MainForm from '../components/organisms/MainForm';
import AllNotes from '../components/organisms/AllNotes';


const ListView = ({children}) => {
  

    return(
        <MainTemplate>
            <MainForm></MainForm>
            <AllNotes></AllNotes>
            {children}
        </MainTemplate>
    );
}

export default ListView;