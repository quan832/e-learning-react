import React, { Component } from 'react'
import Axios from 'axios';

export default class CourseItem extends Component {
    render() {
        return (
            <div className="card p-2">
                <img></img>
                <p className="lead font-weight-bold">ReactJS BootCamp</p>
                <p className="lead">Instructor: Lorem, ipsum.</p>
                <p className="lead">Rating: 5.0</p>
                <button className="btn btn-success">Go To Detail</button>
            </div>
        )
    }
    
}
