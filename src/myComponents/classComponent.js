import React, { Component } from 'react'

class Welcome extends Component
{
        render()
        {
                return <h3>I am from {this.props.name}</h3>
        }
        
}

export default Welcome;