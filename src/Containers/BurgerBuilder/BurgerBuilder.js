import React ,{Component} from 'react';
import Aux from '../../hoc/auxi';
import {connect} from 'react-redux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Model from '../../Components/UI/Model/Model';
import OrderSummary from './../../Components/Burger/OrderSummary/OrderSummary';
import * as actionTypes from '../../Store/actions';



class BurgerBuilder extends Component{
    constructor(props){
        super(props)
        this.state = {
            purchasing : false
        }
    }

    // addIngeredientHandler = (type) =>{
    //     const oldcount  = this.state.ingretients[type];
    //     const updatecount = oldcount + 1;
    //     const updateIngredient = {
    //         ...this.state.ingretients
    //     } 
    //     updateIngredient[type] = updatecount;
    //     const priceadded = INGREDIENT_PRICES[type];
    //     const oldprice = this.state.totalPrice;
    //     const newprice = oldprice + priceadded;

    //     this.setState({
    //         totalPrice : newprice,
    //         ingretients : updateIngredient
    //     })
    // }

    // removeIngredientHandler = (type) =>{
    //     const oldcount = this.state.ingretients[type];
    //     if(oldcount <=0){
    //         return;
    //     }        
    //     const updatedcount = oldcount - 1
    //     const updateIngredient = {
    //         ...this.state.ingretients
    //     };
    //     updateIngredient[type] = updatedcount;

    //     const pricededuction  = INGREDIENT_PRICES[type];
    //     const oldprice = this.state.totalPrice;
    //     const newprice = oldprice - pricededuction;
    //     this.setState({
    //         totalPrice: newprice,
    //         ingretients : updateIngredient
    //     })
    // }

    purchaseCancelHandler = () =>{
        this.setState({
            purchasing :false
        });
    }

    purchaseContinueHandler = () =>{
      

    // const queryParams = [];

    // for (let i in this.state.ingretients){
    //             queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingretients[i]))
    // }
    // queryParams.push('price=' + this.state.totalPrice);
    // const queryString = queryParams.join('&')
    // this.props.history.push({
    //     pathname : './checkout',
    //     search: "?" + queryString
    // });
    this.props.history.push('/checkout')
    }
    purchaseHandler = () =>{
        this.setState({
            purchasing :true
        })
    }
    render() {
        return(
            <Aux>
            <Model show = {this.state.purchasing} modelClosed = {this.purchaseCancelHandler}>
                <OrderSummary ingretients = {this.props.ings} 
                            cancelled = {this.purchaseCancelHandler}
                            continued  = {this.purchaseContinueHandler}
                            price = {this.props.price}/>
            </Model>
            <Burger ingretients = {this.props.ings} />
            <BuildControls 
                ingretientsadded = {this.props.onIngredientAdded}
                ingretientsdeducted = {this.props.onIngredientRemoved}
                price = {this.props.price}
                ordered = {this.purchaseHandler}/>
            </Aux>
        );
    }
}
 const mapStateToProps = state =>{
     return{
         ings : state.ingretients,
         price : state.totalPrice
     }
 }

 const mapDispatchToProps = dispatch =>{
     return {
         onIngredientAdded : (ingName) =>dispatch({type : actionTypes.ADD_INGREDIENT , ingredientName : ingName}),
         onIngredientRemoved : (ingName) =>dispatch({type : actionTypes.REMOVE_INGREDIENT , ingredientName : ingName})
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder); 