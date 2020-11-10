import {keyframes} from 'styled-components';

export const showOutOfTransparency = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1
    }
`;

export const moveFromBottom = keyframes`
    from{
        opacity: 0;
        transform:translateY(50px)
    }   
    to{
        transform:translateY(0px)
        opacity: 1
    }
`