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

export const spinAnimation = keyframes`
    0%{  
        transform:rotate(0deg);
    }
    50%{
        transform:rotate(90deg) scale(0.75);
    }
    100%{
        transform:rotate(180deg) scale(1);
    }
`