import React, { useEffect, useState } from 'react';

function EffectTest02(props) {
    const [count, setCount1] = useState(0); 
    const [count2, setCount2] = useState(0); // useEffect가 관리 
    
    console.log("컴포넌트 렌더링 시작");
    useEffect(() => {
        console.log("useEffect 실행됨");

    }, [count2]);
    return (
        <div>
            <h1>useState와 useEffect의 비교</h1>            
            <p>useState count1: {count}</p>
            <button onClick={() => setCount1(count + 1)}>count1 올리기 </button>
            <br /><br />
            <p>useEffect count2: {count2}</p>
            <button onClick={() => setCount2(count2 + 1)}>count2 올리기 </button>
        </div>
    );
}

export default EffectTest02;