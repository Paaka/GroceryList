import React, {useState} from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import SignIn from '../molecules/SignIn';
import SignUp from '../molecules/SignUp';

const Wrapper = styled.div`
    width:30vw;
    height:55vh;
    background-color:white;
    border-radius:10px;
`
const StyledH3 = styled.h3`
    font-family: ${Fonts.montserrat.fontName}, ${Fonts.montserrat.fontSpecyfication};
    font-size:30px;
    font-weight:${Fonts.montserrat.fontWeights.medium};
`

const StyledP = styled.p`
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

