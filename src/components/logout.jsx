import React, { Component } from 'react'

export default class Logout extends Component {
    constructor() {
        super() 
        localStorage.removeItem("token");     
    }
    render() {
        return (
            <div>
                <h1 className="logoutHead">You have been logged out!</h1>
            </div>
        )
    }
}
