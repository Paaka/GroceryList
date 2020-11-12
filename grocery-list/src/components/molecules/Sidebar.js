import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color:red;
    width:20vw;
    height:100vh;
    position:absolute;
    display:flex;
    transform:translateX(${({isSidebarOpen})=> isSidebarOpen ? '0' : '-20vw'});
    transition:transform 0.25s ease-in;
`

const Sidebar = ({isSidebarOpen, closeSidebarFn}) => {
    const closeSidebarHandler = () => {
        closeSidebarFn();
    }

    return(
        <Container isSidebarOpen={isSidebarOpen}>
            XDDD
            <p onClick={closeSidebarHandler}>oggleSidebarFn</p>
        </Container>
    )
};

export default Sidebar;