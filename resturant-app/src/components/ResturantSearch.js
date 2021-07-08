import React, { Component } from 'react'
import { Table,Form,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Logout } from './Logout';
import  NavMenu  from './NavMenu';


export default class ResturantSearch extends Component {
    constructor() {
        super()
    
        this.state = {
          searchData:null   ,
          emptyData:false,
          lastSearch:''
        }
    }
    delete(id){
        fetch('http://localhost:3000/restaurant/'+id,{
            method:'Delete',
        })
        .then((response)=>{
            response.json().then((res)=>{
                alert('resturant has been deleted')
                this.search(this.state.lastSearch )
            })
    }
        )}
    search(key){
        this.setState({lastSearch:key})
        fetch('http://localhost:3000/restaurant?q='+key).then((data)=>{
            data.json().then((res)=>{
                console.warn(res);
                if(res.length>0){
                    this.setState({searchData:res,emptyData:false})
                }
                else{
                    this.setState({emptyData:true,searchData:null})
                }
                        })
    })
    }
    
    render() {
        return (
            <Container>
                        <NavMenu />

                <h2>ResturantSearch </h2> 
                     <Form.Control type="text" onChange={(e)=> this.search(e.target.value)}
                 placeholder='Enter resturant to search' />


                <div >
                    {
                        this.state.searchData?
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
                        <tbody> {
                                  this.state.searchData.map((item)=>
                                   
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
                                  


                              </tr> )
                            }
                            </tbody>
                           </Table>
                        </div>:" "

                    }
                    {
                        this.state.emptyData?<h3>Data not Found</h3>:null
                        }

            </div>
                        </Container>

        )
    }
}
