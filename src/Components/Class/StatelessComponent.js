import React from 'react';

const handleButtonHover=()=>{
    console.log("Hovered")
}

function StatelessComponent(props) {
/**
 * Don't define a function inside stateless component
    const handleButtonHover=()=>{
        console.log("Hovered")
    }
*/
    return (
        <div style={{marginTop:50}}>Stateless Component
            <button onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Hover Over Me</button>
        </div>
    );
}

export default StatelessComponent;