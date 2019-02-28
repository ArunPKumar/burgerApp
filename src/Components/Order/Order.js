import React from 'react';
import classes from './Order.css';

const Order = (props) =>{
    const ingredients = [];
    for(let ingretientName in props.Ingretients){
        ingredients.push({
            name : ingretientName,
            amount : props.Ingretients[ingretientName]
        })
    }

    const ingredientOutput = ingredients.map(ig =>{
        return(
            <span 
            style = {{testTransform : 'capitalize',
                    display : 'inline-block',
                    margin : '0 8px',
                    border : '1px solid #ccc',
                    padding:'5px'}}key = {ig.name}> {ig.name} ({ig.amount})</span>
        )
    })
    return(
        <div className = {classes.Order}>
        <p>Ingeretients :  {ingredientOutput}</p>
        <p>price : USD {Number.parseFloat(props.price).toFixed(2)} </p>
    </div>
    )
    

}

export default Order;