import React, {useState} from 'react';
import AddNoteForm from '../molecules/AddNoteForm';



const MainForm = () => {
    const [isNoteFormOpen, setIsNoteFormOpen] = useState(false);

    return (<div>
        <p>Add items</p>
        <AddNoteForm></AddNoteForm>
    </div>);
};

export default MainForm;