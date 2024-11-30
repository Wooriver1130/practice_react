import { Button } from '@mui/material';
import React from 'react';

 // 선언식
// function Btn02_Article_10({name}) {
//     return (
//         <Button variant='contained' onClick={() => alert(name)}>{name}</Button> 
//     );
// }

// export default Btn02_Article_10;

// 표현식
// const Btn02_Article_10 = ({name}) => {
//    return  <Button variant='contained' onClick={() => alert(name)}>{name}</Button> 
// }


// button태그 on속성
const Btn02_Article_10 = ({name}) => {
    const EventFunc = (name, e) => {
        console.log("이름: ", name, "발생한 이벤트: ", e);
    }
    return(
        <Button variant='contained' 
            onMouseEnter={() => EventFunc(name, "마우스가 들어감")}
            onMouseLeave={() => EventFunc(name, "마우스가 나감")}
            onDoubleClick={() => EventFunc(name, "더블클릭함")}
            onContextMenu={() => EventFunc(name, "우클릭을 누름")}
            >{name}</Button> 
    );
}





export default Btn02_Article_10;