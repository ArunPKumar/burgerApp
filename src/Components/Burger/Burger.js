import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

import classes from './Burger.css';

const burger = (props) =>{
    console.log(props);
    let transformIngredients = Object.keys(props.ingretients).map( igkey =>{
        return [...Array(props.ingretients[igkey])].map((_,i) =>{
            return <BurgerIngredient key = {igkey + i} type = {igkey} />        
        });
    })
    .reduce((arr,el) =>{
        return arr.concat(el)
    },[]);
    if (transformIngredients.length === 0){
        transformIngredients = <p>Please Start Adding Ingredients</p>
    }
    // const burger = (props) =>{
    //     const some = Object.keys(props.ingretients).map(igkey =>{
    //          return [...Array(props.ingretients[igkey])].map((_,i) =>{
    //              return <BurgerIngredient key = {igkey + i} type = {igkey} />
    //          })
            
    //     })
    //     console.log(some)

        // const array = [...Array([2])]
        // console.log(array)
        
        
    return(
        <div className = {classes.Burger}>
        <BurgerIngredient type = "bread-top"/>
        {transformIngredients}
        <BurgerIngredient type = "bread-bottom"/>
        </div>
    )
}


export default burger;