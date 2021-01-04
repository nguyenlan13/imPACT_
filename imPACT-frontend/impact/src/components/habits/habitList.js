  
import React, { Component } from "react";
import { Link } from 'react-router-dom'

class habitList extends Component {

    render(){

        const { build, title, number, frequency, habitId} = this.props
        return(
        
            <div>
                <Link to={`/habits/${habitId}`}> {title}</Link>
            </div>
        
        )
    }
}

export default habitList