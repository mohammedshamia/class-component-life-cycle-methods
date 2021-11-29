import React from 'react';

function IncrementButton({handleIncrement}) {
    const random=Math.random()
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <div>{random}</div>
        </div>
    );
}

export default React.memo(IncrementButton);