import React, { useState } from 'react';
import TmptInput from './TmptInput';
import UnitChange from './UnitChange';

function TmptConverter(props) {
    const [isC , setIsC] = useState(true);
    const [tmpt, setTmpt] = useState(0);
    const convertValue =  isC ? (tmpt * 1.8 + 32).toFixed(1) : ((tmpt -32) / 1.8).toFixed(1) ;
    
    return (
        <div>
            <h1>화씨섭씨 변환기 </h1>
            <p>변환된 값: {convertValue} {isC ? "\u00B0F" : "\u00B0C" }</p>
            <UnitChange isC={isC} setIsC={setIsC} /> 
            <TmptInput value={tmpt} isC={isC} setTmpt={setTmpt} /> 
        </div>
    );
}

export default TmptConverter;