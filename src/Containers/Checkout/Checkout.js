import React ,{Component} from 'react';
import CheckOutSummary from './../../Components/CheckOutSummary/CheckOutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component{
    state = {
        ingretients : null,
        price : 0

    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingretients = {}
        let price = 0
        for (let param of query.entries()){
            if (param[0] === 'price') {
                price = param[1];
            }else{
                ingretients[param[0]] = +param[1];
            }
            
        }
        this.setState({ingretients:ingretients, totalPrice :price})
    }

    checkOutCancelledHandler = () =>{
        this.props.history.goBack();
        
    }

    checkOutContinuedHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return(
            <div>
                <CheckOutSummary ingretients = {this.state.ingretients}
                checkOutCancelled = {this.checkOutCancelledHandler}
                checkOutContinued = {this.checkOutContinuedHandler}/>
                <Route path = {this.props.match.path + '/contact-data'} 
                render = { () =>(<ContactData ingretients = {this.state.ingretients} price = {this.state.totalprice}/>)}/> 
            </div>
        );
    }
}

export default CheckOut;