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
    

     return(<Container>
                <Sidebar />
                <Header title="my grocery list" >Heelo</Header>  
                {children}
            </Container>
    );
};

export default MainTemplate;