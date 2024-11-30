
function AlertBtn({msg, children}) {
    return (
        <button onClick={() => alert(msg)}>
                {children}               
        </button>
        );
    }
function Step108Event02() {
    return (
        <div>
            <AlertBtn msg="경고버튼 1" >AlertBtn1</AlertBtn> 
            <AlertBtn msg="경고버튼 2" >AlertBtn2</AlertBtn> 
        </div>
    );
}

export default Step108Event02;