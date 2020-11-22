import React, {useState} from 'react';
import styled from 'styled-components';

import { showOutOfTransparency } from '../../animations/animations';
import colors from '../../constants/colors';
import GradientButton from '../atoms/GradientButton';
import Heading3 from '../atoms/Heading';
import LoginFormInput from './LoginFormInput';
import atSVG from '../../assets/SVG/arroba.svg';
import padlockSVG from '../../assets/SVG/padlock.svg';
import Paragraph from '../atoms/Paragraph';
import ButtonImage from '../atoms/ButtonImage';
import facebookSVG from '../../assets/SVG/facebook.svg';
import googleSVG from '../../assets/SVG/google.svg';
import firebase, { signInWithGoogle } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/action';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:100%;
    animation: ${showOutOfTransparency} 1s ease-in;
`

const LoginButtonsWrapper = styled.div`
    display:flex;
    justify-content:center;
`

const AdditionalLoginWrapper = styled.div`
    margin-bottom:30px;
`

const SignIn = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const cleanInputs = () => {
        setEmailInput('');
        setPasswordInput('');
    }


    

    const submitHandler = async e =>{
        e.preventDefault();
        const {user} = await firebase.auth().signInWithEmailAndPassword(emailInput,passwordInput);
        const uid = user.uid;
        dispatch(loginUser(uid, emailInput));
        history.push('/')
        cleanInputs();
    }

    const loginViaFacebook = () => {
        console.log('Przez fejsbuka');
    }
    
    const loginViaGoogle = async () => {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        const res = await signInWithGoogle();
        const email = res.additionalUserInfo.profile.email;
        const uid = res.user.uid;
        dispatch(loginUser(uid,email));
        history.push('/');
    }

    return(<Wrapper>
        <Heading3 textTransform="uppercase" fontWeight={700} fontSize={30}>Login</Heading3>
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
            <GradientButton type="submit" color="white">Login</GradientButton>
        </form>
        <AdditionalLoginWrapper>
            <Paragraph marginVertical="5px">Or sign in using :</Paragraph>
            <LoginButtonsWrapper>
                <ButtonImage hoverBgColor="#eee" image={facebookSVG} onClickFn={loginViaFacebook}/>
                <ButtonImage hoverBgColor="#eee" image={googleSVG} onClickFn={loginViaGoogle} />
            </LoginButtonsWrapper>
        </AdditionalLoginWrapper>
    </Wrapper>)
}

export default SignIn;