import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Heading3 from '../atoms/Heading';
import ButtonImage from '../atoms/ButtonImage';
import MoreSVG from '../../assets/SVG/more.svg';
import { logoutUser } from '../../actions/action';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../firebase/firebase';
import logoutSVG from '../../assets/SVG/logout.svg';
import DivImage from '../atoms/DivImage';
import userSvg from '../../assets/SVG/user.svg';
import SearchNote from '../molecules/SearchNote';

const Wrapper = styled.div`
    box-sizing:border-box;
    display:flex;
    margin-left:100px;
    align-items:center;
    justify-content:space-between;
    width:calc(100vw-100px);
    height:6vh;
`

const UserItemsContainter = styled.div`
    display:flex;
    justify-content:flex-end;
    align-self:center;
    margin:20px;
`

const LoggedUserItems = ({logoutHandler}) => {
    return (<UserItemsContainter>
        <ButtonImage onClickFn={logoutHandler} image={logoutSVG} hoverBgColor="#ccc">Wyloguj</ButtonImage>
        <Link to="/user">
            <DivImage image={userSvg}/>
        </Link>
    </UserItemsContainter>)
}


const Header = () => {
    const dipsatch = useDispatch();
    const { user }= useSelector(state => state);

    const logoutHandler = () => {
        firebase.auth().signOut();
        dipsatch(logoutUser());
        
    }
  
    const checkIfUserIsLoggedIn = () => {
        console.log(user);
        if(user === null){
            return <Redirect to="/login"></Redirect>
        }else{
            return <LoggedUserItems logoutHandler={logoutHandler}/>
        }
    }

    checkIfUserIsLoggedIn();

    return(
        <Wrapper>
            <SearchNote />
            {checkIfUserIsLoggedIn()}
        </Wrapper>
        );
}

export default Header;