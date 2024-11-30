import React from 'react';

function UnitChange({isC, setIsC}) {
    return (
        <div>
            <span>{isC ? "섭씨(C)" : "화씨(F)"}</span>
            <span>&raquo; </span>
            <span>{isC ? "화씨(F)" : "섭씨(C)"}</span>
            <button onClick={() => setIsC(!isC)}>순서 변경</button>
        </div>
    );
}

export default UnitChange;