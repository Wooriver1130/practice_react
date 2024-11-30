import React, { useState } from 'react';

function Form(props) {
    const [userName, setUserName] = useState("");
    const [isSub, setIsSub] = useState(false);
    const levels = ["유저", "관리자", "게스트"];
    const [level, setLevel] = useState(levels[0]);
    return (
        <form>
            <p>이름: {userName} {isSub && "(구독함)"}</p>
            <p>유저 등급: {level}</p>       
            <input 
                type="text" 
                placeholder='이곳에 입력하세요' 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            /> <br />
            <input
                type="checkbox"
                checked={isSub}
                onChange={(e) => setIsSub(e.target.checked)}
              /><label>구독하기 </label> <br />
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
                {levels.map(item => <option key={item} value={item}>{item}</option>)}
            </select>

        </form>
    );
}

export default Form;