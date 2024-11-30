import React, { useEffect, useState } from 'react';

function EffectTest03(props) {
    const [data, setData] = useState([]); // api에서 가져온 데이터를 data에 저장하자. 
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(data => {
            if (!data.ok) {
                throw new Error("네트워크 에러");
            }
            return data.json(); // 응답 데이터를 JSON 형태로 변환하기
        })// .then(data => setData(data))
        .then(data => setData(data.slice(0, 3))) // 배열의 첫3개만 가져오자
        .catch(error => setError(error.message));
    });
    return (
        <div>
            <ul>
                {data.map(item => {
                    return(
                        <li key={item.id}>
                        <h3>제품명: {item.name}</h3>
                        <p>가격: {item.price}</p>
                        <img src={item.image_link} width="100px"/>
                    </li>
                    );
                   
                })}
            </ul>
        </div>
    );
}

export default EffectTest03;