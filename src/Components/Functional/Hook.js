import {useState} from "react";

export const useStateInsideFunc=(
    /** userId*/
    userId
)=>{
    const [counter, setCounter]=useState(0)
    /** return number 5*/
    return 5
}