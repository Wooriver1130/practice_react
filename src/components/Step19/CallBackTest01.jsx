import React, { useCallback, useState } from 'react';
import Light from './Light';

function CallBackTest01(props) {

    console.log("컴포넌트 렌더링");

    const [room1ON, setRoom1ON] = useState(false);
    const [room2ON, setRoom2ON] = useState(false);
    const [room3ON, setRoom3ON] = useState(false);

    const toggle1 = useCallback(() => setRoom1ON(!room1ON), [room1ON]);
    const toggle2 = useCallback(() => setRoom2ON(!room2ON), [room2ON]);
    const toggle3 = useCallback(() => setRoom3ON(!room3ON), [room3ON]);
    return (
        <div>
            <Light room="방1" on={room1ON} toggle={toggle1}/> 
            <Light room="방2" on={room2ON} toggle={toggle2}/> 
            <Light room="방3" on={room3ON} toggle={toggle3}/> 
        </div>
    );
}

export default CallBackTest01;