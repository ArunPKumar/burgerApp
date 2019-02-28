import React ,{Component} from 'react';

import Button from '../../../Components/UI/Buttons/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../Components/UI/Input/Input';

class ContactData extends Component{
    state = {

        orderform : {           
                name:{
                    elementType : 'input',
                    elementConfig : {
                        type : 'text',
                        placeholder : "Your Name"
                    },
                    value : '',
                    validation : {
                        required : true
                    },
                    valid : false,
                    touched:false

                },
                street : {
                    elementType : 'input',
                    elementConfig : {
                        type : 'text',
                        placeholder : "Street"
                    },
                    value : '',
                    validation : {
                        required : true
                    },
                    valid : false,
                    touched:false
                },
                zipcode : {
                    elementType : 'input',
                    elementConfig : {
                        type : 'text',
                        placeholder : "ZipCode"
                    },
                    value : '',
                    validation : {
                        required : true,
                        minLength : 5,
                        maxLength : 5
                    },
                    valid : false,
                    touched:false
                    
                },
                country : {
                    elementType : 'input',
                    elementConfig : {
                        type : 'text',
                        placeholder : "Country"
                    },
                    value : '',
                    validation : {
                        required : true
                    },
                    valid : false,
                    touched:false
                },
                email:{
                    elementType : 'input',
                    elementConfig : {
                        type : 'email',
                        placeholder : "Your Email"
                    },
                    value : '',
                    validation : {
                        required : true
                    },
                    valid : false,
                    touched:false
                },
                deliveryMethod : {
                    elementType : 'select',
                    elementConfig : {
                        options:[
                            {value : 'fastest' , displayValue : 'Fastest'},
                            {value : "cheapest" , displayValue : "Cheapest"}]
                    },
                    value : "",
                    validation:{},
                    valid : true
                }
            },
            formIsValid : false

        
    }

    orderHandler = (event) =>{
        event.preventDefault();
        // console.log(this.props.ingretients);
          const formData = {}
          for (let formElementidentifier in this.state.orderform) {
              formData[formElementidentifier] = this.state.orderform[formElementidentifier].value
          }
        const order = {
            ingretients : this.props.ingretients,
            price:this.props.price,
            orderData : formData
           
        }
        alert("you continue")
        axios.post('/orders.json',order)
        .then(response => console.log(response))
        .catch(error =>console.log(error));
    
    }

    checkValidation(value,rules){
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid
        }
        return isValid;
    }
    inputChangedHandler = (event ,inputIdentifier) =>{
        // console.log(event.target.value)
        const updatedOrderForm = {
            ...this.state.orderform
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidation(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
       
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }
        this.setState({orderform : updatedOrderForm,formIsValid :formIsValid });
    }
    render(){
        const formElementsArray = [];
        for (let key in this.state.orderform){
            formElementsArray.push({
                id : key,
                config:this.state.orderform[key]
            })
        }
        return(
            <div className = {classes.ContactData}>
                <h3>Enter Your Contact Details</h3>
                <form onSubmit = {this.orderHandler}>
                    {formElementsArray.map(formElement =>(
                        <Input key = {formElement.id}
                            elementType = {formElement.config.elementType} elementConfig = {formElement.config.elementConfig}
                            value = {formElement.config.value} 
                            Invalid = {!formElement.config.valid}
                            shouldValidate= {formElement.config.validation}
                            touched = {formElement.config.touched}
                            changed = {(event) => this.inputChangedHandler(event,formElement.id)}/>
                    ))
                }
                    <Button btnType = "Success" clicked = {this.orderHandler} disabled = {!this.state.formIsValid}>Order</Button>

                    
                </form>
                
            </div>
        )
    }
}

export default ContactData;