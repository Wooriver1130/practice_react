import { Button } from '@mui/material';
import React, { useState } from 'react';

function Toggle_12(props) {
    const [isPinned, setIsPinned] = useState(false);
    const btn_Toggle = () => {
        setIsPinned(!isPinned);
    }
    return (
        <div>
            <Button variant="outlined" onClick={btn_Toggle}>고정하기 {isPinned && 'V'} </Button>
        </div>
    );
}

export default Toggle_12;