import React, { useMemo, useState } from 'react';

function MemoTest01(props) {
    const [count, setCount] = useState(0);
    const[text, setText] = useState("");
    console.log("컴포넌트 렌더링");
    
    // useMemo가 없으면 텍스트를 입력할 때마다 calcValue 함수를 실행한다.
    // 그러나 input에서 글자를 입력하면 count를 사용하지 않고 기존의 값을 갖는다. 
    const calcValue = useMemo(() => {
        console.log("useMeMo 실행됨");
        return count + 1000;
    }, [count]);
    return (
        <div>
            <h1>Let's useMemo</h1>
            <p>계산값: {calcValue}</p>
            <p>입력된 텍스트: {text}</p>
            <button onClick={() => setCount(prev => prev + 1)}>클릭</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    );
}

export default MemoTest01;