import {useCallback, useEffect, useLayoutEffect, useState} from "react";

function Counter(props) {
    const [state, setState]=useState({
        counter:0,
        b:10
    })
    const [counter, setCounter]=useState(0)

    const HandleChangeCounter=useCallback(()=>{
            /*
            setCounter(counter+1)
            setCounter(counter+1)
            setCounter(counter+1)*/

            /** We can't use callback function after updating the state*/
//            setCounter(counter+1)//, ()=> console.log(counter))

            /** Prev Props just with class component*/
            return <div>{props.counter}</div>
        }
    , [props.counter])


    useLayoutEffect(()=>{
       // console.log("useLayoutEffect",counter)
    }, [counter])

    useEffect(()=>{
     //   console.log("useEffect",counter)

        return ()=> {
            console.log("will unmount")
        }
    },[])

    return (
        <div>
            <button onClick={props.handleButtonClick}>Add One</button>
            <div>{counter}</div>
            <div>{state.b}</div>
            <HandleChangeCounter/>
        </div>
    );
}

export default Counter;

