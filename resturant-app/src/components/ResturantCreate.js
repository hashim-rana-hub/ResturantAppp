import React, { Component } from 'react'
import { Logout } from './Logout';
import  NavMenu  from './NavMenu';


export default class ResturantCreate extends Component {
    constructor() {
        super()
    
        this.state = {
             name:null,
             email:null,
             address:null,
             location:null,
             rating:null
        }
    } 
    createResturant(){
        fetch('http://localhost:3000/restaurant',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state) 
        })
        .then((response)=>{
            response.json().then((res)=>{
                console.log(res);
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                        <NavMenu />

                <h2>ResturantCreate</h2> 
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Enter Resturant Name" /> 
                    <br/>
                    <br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Enter Resturant Email" /> 
                    <br/>
                    <br/>
                    <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Enter Address" /> 
                    <br/>
                    <br/>
                    <input onChange={(event)=>{this.setState({location:event.target.value})}} placeholder="Enter Location" /> 
                    <br/>
                    <br/>
                    <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Enter Rating" /> 
                    <br/>
                    <br/>
                    <button onClick={()=>{this.createResturant()} }>Add Resturant</button>
                </div>
            </div>
        )
    }
}
