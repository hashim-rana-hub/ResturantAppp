import React, { Component } from 'react'
import  NavMenu  from './NavMenu';
import { Logout } from './Logout';



 class ResturantUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:null,
            email:null,
            address:null,
            location:null,
            rating:null
       }
    }
    

     componentDidMount() {
         fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response)=>{
             response.json().then((res)=>{
                 console.log(res);
                 this.setState({
                     name:res.name,
                     email:res.email,
                     id:res.id,
                     address:res.address,
                     location:res.location,
                     rating:res.rating
                 })
             })
     })
    }

    updateResturant(){
        fetch('http://localhost:3000/restaurant/'+this.state.id,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state) 
        })
        .then((response)=>{
            response.json().then((res)=>{
            alert('Resturant has Updated')            })
        }).catch((error)=>{
            console.log(error);
        })
    }
   
    render() {
        return (
            <div>
                        <NavMenu />

               <h2>  Restutrant Update </h2>
               <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} 
                    placeholder="Enter Resturant Name" value={this.state.name} /> 
                    <br/>
                    <br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}}
                     placeholder="Enter Resturant Email" value={this.state.email}/> 
                    <br/>
                    <br/>
                    <input onChange={(event)=>{this.setState({address:event.target.value})}}
                     placeholder="Enter Resturant Location" value={this.state.address}/> 
                    <br/>
                    <br/>
                    <input onChange={(event)=>{this.setState({location:event.target.value})}}
                     placeholder="Enter location" value={this.state.location}/> 
                    <br/>
                    <br/>
                    <input onChange={(event)=>{this.setState({rating:event.target.value})}}
                     placeholder="Enter Rating" value={this.state.rating}/> 
                    <br/>
                    <br/>
                    <button onClick={()=>{this.updateResturant()} }>Update Resturant</button>
                </div>
            </div>
        )
        }
}
export default ResturantUpdate