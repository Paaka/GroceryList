import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import Heading3 from '../atoms/Heading';
import Note from '../molecules/Note';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:calc(100vh-200px);
    height:94vh;
    margin-left:150px;
`;

const HeadingWrapper = styled.div`
    display:flex;
    justify-self:flex-start;
    width:100%;
    margin-top:3vh;
    margin-left:5vh;
`

const NotesGrid = styled.div`
    margin-top:3vh;
    margin-left:5vh;
    display:grid;
    grid-template-columns:repeat(5,300px);
    grid-template-rows:repeat(2,320px);
    grid-gap:25px;
    width:calc(100%-5vh);
    height:88vh;
`

const AllNotesWrapper = () => {
    const {fontWeights} = Fonts.montserrat;

    return (<Wrapper>
                <HeadingWrapper>
                    <Heading3 
                        fontSize={40}
                        fontWeight={fontWeights.bold}
                    >Notes</Heading3>     
                </HeadingWrapper>  
                <NotesGrid>
                    <Note noteColor={colors.cardColors.orange}/>
                    <Note noteColor={colors.cardColors.purlple}/>       
                    <Note noteColor={colors.cardColors.oragered}/>
                    <Note noteColor={colors.cardColors.green}/>
                    <Note noteColor={colors.cardColors.orange}/>
                    <Note noteColor={colors.cardColors.orange}/>
                    <Note noteColor={colors.cardColors.blue}/>  
                    <Note noteColor={colors.cardColors.purlple}/>       
                    <Note noteColor={colors.cardColors.oragered}/>
                    <Note noteColor={colors.cardColors.green}/>  
                </NotesGrid>
            </Wrapper>)
}

export default AllNotesWrapper;