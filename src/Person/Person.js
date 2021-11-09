import React from 'react'
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h3 onClick={props.click}>Hi i am  {props.name} and i am {props.age} years old</h3>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )

}

export default person;
