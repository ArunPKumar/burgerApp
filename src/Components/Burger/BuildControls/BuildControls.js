import React from 'react';

import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'; 

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'Bacon'},
    {label:'cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    
]
const buildcontrols = (props) =>(
    <div className = {Classes.BuildControls}>
    <p>Current Price :<strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl =>(
            <BuildControl key = {ctrl.label}  
            label = {ctrl.label}
            added = {() =>props.ingretientsadded(ctrl.type)}
            deducted = {() => props.ingretientsdeducted(ctrl.type)}/>
        ))}
        <button className = {Classes.OrderButton} onClick ={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildcontrols;