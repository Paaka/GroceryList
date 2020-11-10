import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
`

const MainTemplate = ({children}) => {
     return(<Container>
                {children}
            </Container>
    );
};

export default MainTemplate;