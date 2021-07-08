import React, { Component } from 'react'
import { Logout } from './Logout';
import { NavMenu } from './NavMenu';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavMenu />
             <h2> Home </h2>
            </div>
        )
    }
}
