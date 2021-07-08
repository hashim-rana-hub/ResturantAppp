
import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import  NavMenu  from './NavMenu';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:'',
             password:''
        }
    }
    login(){
        console.warn(this.state);
        fetch('http://localhost:3000/login?q='+ this.state.name).then((response)=>{
            response.json().then((res)=>{
                console.warn(res);
               if(res.length>0){
                   localStorage.setItem('login',JSON.stringify(res))
                   console.warn(this.props.history.push('list'));
               } 
               else{
                   alert('please enter valid user')
               }
            })
    }
        )
    }
    render() {
        return (
            <div>
                <NavMenu />
                <h1>Login</h1>
                <input type='text' placeholder='enter user' name='user'
                 onChange={(e)=>this.setState( {name:e.target.value})} /><br /><br/>
                 <input type='text' placeholder='password' name='password' 
                 onChange={(e)=>this.setState({password:e.target.value})} /><br /><br/>
                 <button onClick={()=>{this.login()}} >Login</button>
            </div   >
        )
    }
}

export default Login
