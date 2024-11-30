import React, { useMemo, useState } from 'react';

function Memotest02_1(props) {
    console.log("컴포넌트 렌더링");
    const [query, setQuery] = useState("");
    const items = ["apple", "banana", "cherry", "mango", "berry"];

    const filterItem = useMemo(() => {
        console.log("useMemo 실행됨");
        return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    }, [query]);
    return (
        <div>
            <h3>메모테스트 2-1</h3>        
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filterItem.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

        </div>
    );
}

export default Memotest02_1;