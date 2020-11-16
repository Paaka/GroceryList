import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heading3 from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const Container = styled.div`
    border:2px solid #ccc;
    width:50vw;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding:10px;
    margin-top:5px;
    transition: border 0.2s ease-in;
    cursor: pointer;

    &:hover{
        border:2px solid #333;
    }
`


const SingleNote = ({note}) => {
    const {title, description,id} = note;

    return(<Link to={`/note/${id}`} style={{textDecoration:'none', color:"inherit"}}>
        <Container>
            <Heading3 fontWeight={700}>{title}</Heading3>
            <Paragraph size="14px">{description}</Paragraph>
        </Container>
        </Link>)
}

export default SingleNote;