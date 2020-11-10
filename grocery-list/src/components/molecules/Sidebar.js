import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color:red;
    width:20vw;
    height:100vh;
    position:absolute;
    display:${({isSidebarOpen}) => isSidebarOpen ? 'flex' :'none'};
`

const Sidebar = ({isSidebarOpen}) => {
    return(
        <Container isSidebarOpen={isSidebarOpen}>
            XDDD
        </Container>
    )
};

export default Sidebar;