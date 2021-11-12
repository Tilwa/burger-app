import React from 'react'
//import './Person.css';
import style from 'styled-components';

const StyledDiv = style.div`
    width: 40%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center; 
`

const person = (props) => {
    return (
        <StyledDiv>
            <h3 onClick={props.click}>Hi i am  {props.name} and i am {props.age} years old</h3>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    )

}

export default person;
