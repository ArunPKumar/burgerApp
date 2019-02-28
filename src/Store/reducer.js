import * as actionTypes from './actions';

const initialState = {
    ingretients : {
        salad : 0,
        Bacon : 0,
        cheese : 0,
        meat : 0
    },

    totalPrice : 4,
}
const INGREDIENT_PRICES = {
    salad : 0.5,
    Bacon : 1.2,
    cheese : 0.4,
    meat : 1.1

}


const reducer =(state = initialState,action) =>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
        return{
            ...state,
            ingretients :{
                ...state.ingretients,
                [action.ingredientName] : state.ingretients[action.ingredientName] + 1
            },
            totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName]

        };
        case actionTypes.REMOVE_INGREDIENT:
        return{
            ...state,
            ingretients :{
                ...state.ingretients,
                [action.ingredientName] : state.ingretients[action.ingredientName] - 1
            },
            totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName]

        };
        default:
        return state;
    }
    

};

export default reducer;