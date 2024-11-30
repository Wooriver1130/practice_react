import React, { useEffect, useState } from 'react';

function EffectTest01(props) {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `총 ${count}번 클릭했습니다.`;
    // }, {count});

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `총 ${count}번 클릭했습니다.`;
    // );
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
    }, [count]);
    return (
        <div>
           <p>총 {count}번 출력했습니다</p> 
           <button onClick={() => setCount(count + 1)}>클릭하기</button>
        </div>
    );
}

export default EffectTest01;