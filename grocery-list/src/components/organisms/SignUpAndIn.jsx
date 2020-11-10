import React, {useState} from 'react';
import styled from 'styled-components';
import { showOutOfTransparency } from '../../animations/animations';
import colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import SignIn from '../molecules/SignIn';
import SignUp from '../molecules/SignUp';

const Wrapper = styled.div`
    position:relative;
    width:30vw;
    height:55vh;
    background-color:white;
    border-radius:10px;
`

const StyledP = styled.p`
    position:absolute;
    bottom:15px;
    margin:0 auto;
    left:0;
    right:0;
    font-family: ${Fonts.montserrat.fontName}, sans-serif;
    cursor: pointer;
    transition: color 0.25s ease-in;

    &:hover{
        color:${colors.gradientSecondary};
    }

`

const SignUpAndIn = () => {
    const [isSignInDisplayed, setIsSignInDisplayed] = useState(true);

    const toggleBetweenSignInAndUp = () => {
        setIsSignInDisplayed(!isSignInDisplayed);
    }

    const displayProperText = () => {
        return isSignInDisplayed ? 'Create an account? Sign up' : 'Already have an account ? Sign In';
    }

    return(<Wrapper>
            {isSignInDisplayed ? <SignIn/> : <SignUp/>}        
            <StyledP onClick={toggleBetweenSignInAndUp}>
                {displayProperText()}
            </StyledP>
            </Wrapper>);
}

export default SignUpAndIn;

