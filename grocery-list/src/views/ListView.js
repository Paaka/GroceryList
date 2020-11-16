import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/organisms/Header';
import MainTemplate from '../templates/MainTemplate';
import Sidebar from '../components/molecules/Sidebar';
import MainForm from '../components/organisms/MainForm';
import AllNotes from '../components/organisms/AllNotes';


const ListView = ({children}) => {
    const groceryList = useSelector(state => state.groceryList);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebarHandler = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return(
        <MainTemplate>
            <Sidebar isSidebarOpen={isSidebarOpen} closeSidebarFn={toggleSidebarHandler}/>
            <Header title="my grocery list" openSidebarFn={toggleSidebarHandler}>Heelo</Header>  
            <MainForm></MainForm>
            <AllNotes></AllNotes>
            {children}
        </MainTemplate>
    );
}

export default ListView;