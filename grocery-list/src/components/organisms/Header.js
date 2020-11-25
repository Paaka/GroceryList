import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Heading3 from '../atoms/Heading';
import ButtonImage from '../atoms/ButtonImage';
import MoreSVG from '../../assets/SVG/more.svg';
import { logoutUser } from '../../actions/action';
import { Redirect } from 'react-router-dom';
import firebase from '../../firebase/firebase';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    align-items:center;
    justify-content:center;
    width:100vw;
    height:10vh;
    border-bottom:2px solid #333;
`

const Header = ({openSidebarFn}) => {
    const dipsatch = useDispatch();
    const {listTitle, user }= useSelector(state => state);
    
    const moreOptionsHandler = () =>{
        firebase.auth().signOut();
        openSidebarFn();
    }

    const logoutHandler = () => {
        dipsatch(logoutUser());
        
    }
  
    const checkIfUserIsLoggedIn = () => {
        console.log(user);
        if(user === null){
            return <Redirect to="/login"></Redirect>
        }else{
            return <button onClick={logoutHandler}>Wyloguj</button>
        }
    }

    checkIfUserIsLoggedIn();

    return(
        <Wrapper>
            <ButtonImage hoverBgColor="#eee" image={MoreSVG} onClickFn={moreOptionsHandler}/>
            <Heading3>{listTitle}</Heading3> 
            {checkIfUserIsLoggedIn()}
        </Wrapper>
        );
}

export default Header;