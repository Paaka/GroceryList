import React, {useState} from 'react';
import styled from 'styled-components';

import { showOutOfTransparency } from '../../animations/animations';
import colors from '../../constants/colors';
import GradientButton from '../atoms/GradientButton';
import Heading3 from '../atoms/Heading';
import LoginFormInput from './LoginFormInput';
import atSVG from '../../assets/SVG/arroba.svg';
import padlockSVG from '../../assets/SVG/padlock.svg';

const Wrapper = styled.div`
    animation: ${showOutOfTransparency} 1s ease-in;
`

const SignIn = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState('');

    const cleanInputs = () => {
        setEmailInput('');
        setPasswordInput('');
    }

    const submitHandler = e =>{
        e.preventDefault();
        console.log(emailInput, passwordInput);
        cleanInputs();
    }

    return(<Wrapper>
        <Heading3 textTransform="uppercase" fontSize={30}>Login</Heading3>
        <form onSubmit={submitHandler}>
            <LoginFormInput label="Email"
                            placeholder="Type your email"
                            inputType="email"
                            image={atSVG} 
                            inputValue={emailInput} 
                            setInputFn={setEmailInput}/>
            <LoginFormInput label="Password"
                            placeholder="Type your password"
                            inputType="password"
                            image={padlockSVG}
                            inputValue={passwordInput} 
                            setInputFn={setPasswordInput}/>
            <GradientButton firstGradientColor={colors.gradientPrimary}
                            secondGradientColor={colors.gradientSecondary} 
                            type="submit" color="white">Login</GradientButton>
        </form>
    </Wrapper>)
}

export default SignIn;