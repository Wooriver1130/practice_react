
 // function Book(props) {
//     return (
//        <>
//             <h1>이 책의 이름은 {`${props.name}`} 입니다.</h1>
//             <h1>이 책의 이름은 {props.name} 입니다.</h1>

//             <h1>이 책은 총 {`${props.totalPage}`} 페이지로 이루어져 있습니다.</h1>
//        </>
//     );
// } 
function Book({name, totalPage}) {
    return (
       <>
            <h1>이 책의 이름은 {`${name}`} 입니다.</h1>
            <h1>이 책의 이름은 {name} 입니다.</h1>

            <h1>이 책은 총 {`${totalPage}`} 페이지로 이루어져 있습니다.</h1>
            <h1>이 책은 총 {totalPage} 페이지로 이루어져 있습니다.</h1>
       </>
    );
}

export default Book;