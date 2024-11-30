import React, { useEffect, useMemo, useState } from 'react';

function MemoTest03(props) {
    console.log("컴포넌트 렌더링");
    const [number, setNumber] = useState(0);
    const [isKor, setIsKor] = useState(true);
    
    // input을 누르면 location이 아니므로 useEffect가 출력이 안 된다. 
    // const location = isKor ? "한국" : "외국" ;
    const location = useMemo(() => {
        return {country : isKor ? "한국": "외국"};
    }, [isKor]);


    useEffect(() => {
        console.log("useEffect 호출됨");
    }, [location]);
    return (
        <div>
            <h2>하루에 몇끼 먹어요? </h2>    
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
             />
             <h2>이 사람은 어느 위치에 있나요?</h2>
             <p>나라: {location.country}</p>
             <button onClick={() => setIsKor(!isKor)}>비행기 타기</button>
        </div>
    );
}

export default MemoTest03;