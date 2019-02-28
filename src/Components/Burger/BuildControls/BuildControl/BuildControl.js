import React from 'react';

import Classes from './BuildControl.css';

const buildcontrol = (props) =>{
    return(
    <div className = {Classes.buildcontrol}>
        <div className = {Classes.Label}>{props.label}</div>
        <button className = {Classes.Less} onClick = {props.deducted}>Less</button>
        <button className = {Classes.More} onClick = {props.added}>More</button>
        
    </div>
    )

}

export default buildcontrol;