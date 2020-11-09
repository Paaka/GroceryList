import React from 'react';
import styled from 'styled-components';
import SignUpAndIn from '../components/organisms/SignUpAndIn';
import colors from '../constants/colors';

const BackgroundWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    background-image: linear-gradient(to right top,${colors.gradientPrimary},${colors.gradientSecondary} );
`

const LoginView = () => {
    return(
        <BackgroundWrapper>
            <SignUpAndIn/>
        </BackgroundWrapper>
    );
};

export default LoginView;