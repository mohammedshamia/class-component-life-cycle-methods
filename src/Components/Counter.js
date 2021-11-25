import React, {PureComponent} from 'react';

class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            counter:props.counter,
            counter1:0,
            isLoading:true
        }
    }

    /** It works in mounting and updating*/
    static getDerivedStateFromProps(props, state) {
        return {counter: props.counter };
    }

    /** It works in mounting but it doesn't work after the React 17 */
 /*   UNSAFE_componentWillMount() {
        console.log('Mounting')
    }*/

    /** It works in mounting but after the render*/
  componentDidMount() {
        console.log('componentDidMount finished')
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json =>{
                this.setState(prevState=>{
                    return {...prevState, list:json.slice(0,10), isLoading:false}
                })
            })
    }

    /** To avoid useless rerenders
   shouldComponentUpdate(nextProps, nextState) {
        if (nextState.counter1 === this.state.counter1)
            return false

       return true
   }*/

    handleButtonClick= () => this.setState(prevState=>{
        console.log(prevState.counter)
        return {...prevState, counter1:prevState.counter1 +1 }
    })

    /** It works after the rerender*/
    getSnapshotBeforeUpdate(prevProps, prevState) {
       console.log("getSnapshotBeforeUpdate",{prevProps,prevState })
    }

    /** It works after the rerender and after getSnapshotBeforeUpdate*/
    componentDidUpdate(prevProps, prevState) {
       console.log("componentDidUpdate", {prevProps, prevState})

    }


    /** method is called when the component is about to be removed from the DOM.*/
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }


    render() {
        console.log('render')
        return (
            <div id={"div"}>
                <button onClick={this.props.handleButtonClick}>Add One</button>
                <button onClick={this.handleButtonClick}>Add One 2</button>
                <div>{this.state.counter}</div>
                <div>{this.state.counter1}</div>

                {this.state.isLoading?
                    <div>...Loading</div>:
                    this.state.list.map(item=><div key={item.title}>{item.title}</div>)}
            </div>
        );
    }
}

export default React.memo(Counter);