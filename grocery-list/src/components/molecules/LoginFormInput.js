import React from 'react';

const LoginFormInput = ({inputType, inputValue, setInputFn}) => {
    
    const updateInputValueHanlder = (e) => {
        setInputFn(e.target.value);
    };

    return(
        <div>
            <label>Label</label>
            <input type={inputType} value={inputValue} onChange={updateInputValueHanlder}/>
        </div>
    )    
}

export default LoginFormInput;