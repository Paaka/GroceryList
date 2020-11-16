import React, {useState} from 'react';
import styled from 'styled-components';
import Sidebar from '../components/molecules/Sidebar';
import Header from '../components/organisms/Header';

const Container = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
`

const MainTemplate = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebarHandler = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

     return(<Container>
                <Sidebar isSidebarOpen={isSidebarOpen} closeSidebarFn={toggleSidebarHandler}/>
                <Header title="my grocery list" openSidebarFn={toggleSidebarHandler}>Heelo</Header>  
                {children}
            </Container>
    );
};

export default MainTemplate;