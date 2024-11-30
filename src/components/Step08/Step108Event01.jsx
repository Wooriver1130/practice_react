
function Step108Event01(props) {
    function EventFunc() {
        alert("눌렀네1");
    }
    return (
        <>
            <button onClick={EventFunc}>버튼1</button>
            <button onClick={function EventFunc() {alert("눌렀네2")}}>버튼2</button>
            <button onClick={() => alert("눌렀네3")}>버튼3</button>
        </>
    );
}

export default Step108Event01;