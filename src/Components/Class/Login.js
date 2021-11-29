import  React,{Component} from 'react';

class Login extends Component {

    state={
        email:'',
        password:"",
        user:null
    }

    handleInputChange=(e)=>{
        this.setState(prevState=>({
            [e.target.name]:e.target.value
        }))
    }

    handleSubmit=()=>{
        this.setState(prevState=>({
            user:{
                email:prevState.email
                ,password:prevState.password
            }
        }))
    }

componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.user!==this.state.user)
            window.location.hash="#1"
}

    render() {
        console.log(this.state)
        return (
            <div>
                <input type="text" name={'email'} value={this.state.email} onChange={this.handleInputChange}/>
                <input type="text" name={'password'} value={this.state.password} onChange={this.handleInputChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default Login;