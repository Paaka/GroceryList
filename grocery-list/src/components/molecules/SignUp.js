import React from 'react';
import styled from 'styled-components';

import {showOutOfTransparency} from '../../animations/animations';



const Wrapper = styled.div`
    animation: ${showOutOfTransparency} 1s ease-in;
`

const SignUp = () => {
    return(
        <Wrapper>Tutaj będzie się działa rejestracja</Wrapper>
    );
};

export default SignUp;