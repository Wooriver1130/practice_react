import { Button } from '@mui/material';
import React from 'react';

function Btn01_10() {
    function clickFunc() {
        alert("버튼 1 클릭");
    }
    return (
        <div>
            <Button variant="contained" onClick={clickFunc}>버튼1</Button>
            <Button variant="outlined" onClick={() => alert("버튼 2 클릭")}>버튼2</Button>
        </div>
    );
}

export default Btn01_10;