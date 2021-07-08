import React, { Component } from 'react'
import { Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Logout } from './Logout';
import  NavMenu  from './NavMenu';



export default class ResturantList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:null,
             id:null
        }
    }
    componentDidMount() {
      this.getData()
    }
    getData(){
        fetch('http://localhost:3000/restaurant')
        .then((response)=>{
            response.json().then((res)=>{
            this.setState({list:res})            })
    }
        )
    }
    
    delete(id){
        fetch('http://localhost:3000/restaurant/'+id,{
            method:'Delete',
        })
        .then((response)=>{
            response.json().then((res)=>{
                alert('resturant has been deleted')
                this.getData()
            })
    }
        )}
    render() {
        return (
        <div>
                        <NavMenu />
                        <h2>  Resturant List </h2>
                {  this.state.list?
                    <div>
                         <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Rating</th>
                            <th>Address</th>   
                            <th>Location</th>                       
                            <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.list.map((item,i)=>
                                <tr>
                                    <td> {item.id} </td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                    <td>{item.location}</td>
                                    <td>
                                    <Link to={'/update/'+ item.id}><FontAwesomeIcon icon={ faEdit} /></Link>
                                    <span onClick={()=>   this.delete(item.id)}><FontAwesomeIcon icon={ faTrash} /></span>
                                    </td>
                                    


                                </tr>)
                            }
                        </tbody>
                        </Table>
                                                    </div>
                            :<p> please wait </p>
                            }
                                </div>
                                )
                        }
    
}              
          