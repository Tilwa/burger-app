import React from 'react'

const UserInput = (props) => {
    const style = {
        backgroundColor: 'skyblue',
        font: 'inherit', 
        border: '1px solid blue',
        padding: '8px'
    };
    return (
        <div >
            <input type="text" onChange={props.changed} value={props.username} style={style}></input>
        </div>
    )
}

export default UserInput
