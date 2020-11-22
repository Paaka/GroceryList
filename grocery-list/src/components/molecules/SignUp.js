import React, {useState} from 'react';
import styled from 'styled-components';

import {showOutOfTransparency} from '../../animations/animations';
import Heading3 from '../atoms/Heading';
import LoginFormInput from './LoginFormInput';

import atSVG from '../../assets/SVG/at.svg';
import padlockSVG from '../../assets/SVG/padlock.svg';
import GradientButton from '../atoms/GradientButton';
import firebase from '../../firebase/firebase';

const Wrapper = styled.div`
    animation: ${showOutOfTransparency} 1s ease-in;
    height:92%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:space-between;
`




const SignUp = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        if(passwordInput === repeatedPassword){
            const {user} = await firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput);
            console.log(user.uid);
        }
    }

    return(
        <Wrapper>
            <Heading3 
                 fontWeight={700}
                 textTransform="uppercase" 
                 fontSize={30}
            >Register</Heading3>
            <form onSubmit={registerUser}>
                <LoginFormInput label="Email"
                                placeholder="Type your email"
                                image={atSVG}
                                inputType="email"
                                inputValue={emailInput}
                                setInputFn={setEmailInput}/>
                <LoginFormInput label="Password"
                                placeholder="Type your password"
                                image={padlockSVG}
                                inputType="password"
                                inputValue={passwordInput}
                                setInputFn={setPasswordInput}/>
                <LoginFormInput label="Repeat Password"
                                placeholder="Repeat your password"
                                image={padlockSVG}
                                inputType="password"
                                inputValue={repeatedPassword}
                                setInputFn={setRepeatedPassword}/>
                <GradientButton type="submit" color="white">Register</GradientButton>
            </form>
        </Wrapper>
    );
};

export default SignUp;