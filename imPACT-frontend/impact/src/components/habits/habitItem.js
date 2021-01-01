  
import React, { Component } from "react";
import { Link } from 'react-router-dom'

class habitItem extends Component {

    render(){

        const { build, title, number, frequency} = this.props
        return(
            <div>
                <Link to={"/habits"}> {title}</Link>
            </div>
        )
    }
}

export default habitItem