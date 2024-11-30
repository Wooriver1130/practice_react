// function Item06({name, isPacked}) {
//     if (isPacked) {
//         return (<li>{name} ✅</li>);
//     }else {
//        return(<li>{name} </li>);
//     }
    
// }

// export default Item06;

// function Item06({name, isPacked}) {
//         return (<li>{name}{ isPacked &&  "✅"} </li>);
    
// }

// export default Item06;

function Item06({name, isPacked}) {
    let result = name;
    if (isPacked) {
        result += "✅";
    }
    return (<li>{result}</li>);
}

export default Item06;