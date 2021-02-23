import React, { Component } from 'react'

class Welcome extends Component
{
        doThisClass()
        {
                alert('Button clicked from class')
        }
        render()
        {
                return <div>
                        <h3>I am from {this.props.name}</h3>
                        <button onClick={this.doThisClass}>Button click from class</button>
                </div>
        }

}

export default Welcome;