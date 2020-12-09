import React, {useState} from 'react';
import styled from 'styled-components';
import Fonts from '../../constants/fonts';
import DivImage from '../atoms/DivImage';
import Heading3 from '../atoms/Heading';
import logoSVG from '../../assets/SVG/logo.svg';
import plusSVG from '../../assets/SVG/plus.svg'
import { showOutOfTransparency, spinAnimation } from '../../animations/animations';
import colors from '../../constants/colors';
import ColorBtn from '../atoms/ColorBtn';

const Container = styled.div`
    background-color:white;
    min-width:100px;
    height:100vh;
    position:absolute;
    display:flex;
    flex-direction:column;
    border: 1px solid #ccc;
`;

const LogoWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
`

const AddNoteBtn = styled.div`
    background-image:url(${plusSVG});
    background-color:black;
    width:50px;
    height:50px;
    background-size:20px;
    background-position-x:center;
    background-position-y:center;
    background-repeat:no-repeat;
    border-radius:50%;
    animation:${props => props.animate ? spinAnimation : null} 0.5s ease-in-out;
`

const ColorContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-top:3vh;
`

const ColorsContainer = styled.div`
    display:block;
`


const Sidebar = () => {
    const [animate, setAnimate] = useState(false);
    const [isColorsVisible, setIsColorsVisible] = useState(false);

    const openNotesColors = () =>{
        setAnimate(true);
        setTimeout(()=>{
            setAnimate(false);
            setIsColorsVisible(!isColorsVisible);
        },300);
    }

    return(
        <Container >
            <LogoWrapper>
                <DivImage width={30} height={30} bgSize={20}  image={logoSVG} />
                <Heading3 fontWeight={600}>Keeper</Heading3>
            </LogoWrapper> 
            <ColorContainer>
                <AddNoteBtn 
                        onClick={openNotesColors}
                        animate={animate}
                         />
                        {isColorsVisible ?
                        <ColorsContainer> 
                            <ColorBtn closeContainerFn={setIsColorsVisible}
                                      bgColor={colors.cardColors.green} delay={0} />
                            <ColorBtn closeContainerFn={setIsColorsVisible}
                                      bgColor={colors.cardColors.orange} delay={0.4} />
                            <ColorBtn closeContainerFn={setIsColorsVisible}
                                      bgColor={colors.cardColors.oragered} delay={0.7} />
                            <ColorBtn closeContainerFn={setIsColorsVisible}
                                      bgColor={colors.cardColors.purlple} delay={1} />
                            <ColorBtn closeContainerFn={setIsColorsVisible}
                                      bgColor={colors.cardColors.blue} delay={1.4} />
                        </ColorsContainer> : null}    
            </ColorContainer>
        </Container>
    )
};

export default Sidebar;