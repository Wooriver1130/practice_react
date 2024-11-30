import "./Step109Count.css"
function Step109Count(props) {

    let cnt = 5;
    let increment = () => {
    cnt = cnt + 1;
    console.log("cnt", cnt);
    }
    let decrement = () => {
    cnt = cnt - 1;
    console.log("cnt", cnt);
    }
    
    return (
        <div>
            <button className= "btn" onClick={increment}>+</button>
            <span>{cnt}</span>
            <button className= "btn" onClick={decrement}>-</button>
        </div>
    );
}

export default Step109Count;