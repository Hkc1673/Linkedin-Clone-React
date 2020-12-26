import React from 'react'
import "./InputOption.css"


function InputOption({ title, Icon, color }) {
    return (
        <div className="inputOption">
            <Icon style={{color:color}} />
            <h3 className="inputOption__title">{title}</h3>
        </div>
    )
}

export default InputOption
