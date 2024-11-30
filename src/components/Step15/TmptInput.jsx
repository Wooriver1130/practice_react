import React from 'react';

function TmptInput({value, isC, setTmpt}) {
    return (
        <div>
            <input
                type="number" 
                placeholder=' 온도를 입력해주세요.'
                value={value} 
                onChange={(e) => setTmpt(e.target.value)} 

             />
             <span>{isC ? "\u00B0C" : "\u00B0F"}</span>
             
        </div>
    );
}

export default TmptInput;