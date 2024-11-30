import React, { useState } from 'react';
import "./Parents_14.css";
import Child_14 from './Child_14';

function Parents_14(props) {
    const users = ["루피", "조로", "상디"];
    const [user, setUser] = useState(users[0]);
    const [availAble, setAvailable] = useState(true);
    return (
        <div className='center'>
            <h2>유저 프로필</h2>
            <button onClick={() => setAvailable(!availAble)}>상태 변경(활성화/비활성화)</button>
             {/* 유저 변경 버튼 클릭시 기존 요소의 index + 1 해준 뒤  베열의 길이로 나눈 나머지로 설정한다.
             => 마지막 요소에서 클릭 시 처음으로 돌아가게 하기 위해 */}
            <button onClick={() => setUser(users[(users.indexOf(user) + 1) % 3])}>유저 변경</button>
            <p>상태: {availAble ? "사용가능" : "차단됨"} </p>
            <Child_14 name={user}/> 
        </div>
    );
}

export default Parents_14;