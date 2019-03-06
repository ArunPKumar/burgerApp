import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Buttons/Button';
import classes from './CheckOutSummary.css';


const checkOutSummary = (props) =>{
    return(
        <div className = {classes.CheckOutSummary}>
            <h1>Your Tasty Burger is here</h1>
            <div style = {{width : '100%' ,margin : "auto"}}>
                <Burger ingretients = {props.ingretients}/>

            </div>
            <Button btnType = "Danger" clicked = {props.checkOutCancelled}>CANCEL</Button>
            <Button btnType = "Success"clicked = {props.checkOutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkOutSummary;