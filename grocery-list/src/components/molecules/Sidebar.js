import React from 'react';
import styled from 'styled-components';
import Fonts from '../../constants/fonts';
import DivImage from '../atoms/DivImage';
import Heading3 from '../atoms/Heading';
import logoSVG from '../../assets/SVG/logo.svg';

const Container = styled.div`
    background-color:white;
    min-width:100px;
    height:100vh;
    position:absolute;
    display:flex;
    flex-direction:column;
    border: 1px solid #ccc;
`;

const LogoWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
`

const Sidebar = () => {
    

    return(
        <Container >
            <LogoWrapper>
                <DivImage width={30} height={30} bgSize={20}  image={logoSVG} />
                <Heading3 fontWeight={600}>Keeper</Heading3>
            </LogoWrapper> 
            <p >oggleSidebarFn</p>
        </Container>
    )
};

export default Sidebar;