import React from 'react';

function Input_11(props) {
    return (
        <div>
            <input type="text" 
                onFocus={() => console.log("onFocus 됨")} 
                onBlur={() => console.log("onBlur(포커스가 풀림)")}
            />  <br />
            <input type="text"
                onChange={(e) => console.log(e.target.value)} 
            /> <br />
            <input type="text"
                onKeyUp={(e) => console.log(e.key, "UP")}
                onKeyDown={(e) => console.log(e.key, "Down")} 
            />
        </div>
    );
}

export default Input_11;