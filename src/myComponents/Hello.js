import React from 'react';



function Hello(props)
{

        function DoThis()
        {
                alert('Button Clicked')

        }

        return (

                <div><h2>Name: {props.name} And Age: {props.age}</h2>
                        <button onClick={DoThis}>Click me</button>
                </div>
        )
}



export default Hello;