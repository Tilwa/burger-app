import React from 'react'
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="Person">
            <p>Usmername: {props.username}</p>
            <p>Wellcome {props.username} here</p>
        </div>
    )
}

export default UserOutput
