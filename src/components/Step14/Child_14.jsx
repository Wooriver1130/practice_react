import React, { useState } from 'react';

function Child_14({name}) {
    const [connState, setConnState] = useState(false);
    let  stateText =  connState ?  "온라인" : "오프라인";

    return (
        <div>
            <h3>이름: {name}</h3>
            <p>상태: {stateText}</p>
            <button onClick={() => setConnState(!connState)}>상태 변경하기 </button>

        </div>
    );
}

export default Child_14;