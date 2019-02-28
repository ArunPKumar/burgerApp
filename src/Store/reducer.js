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

const reducer =(state = initialState,action) =>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
        return{
            ...state,
            ingretients :{
                ...state.ingretients,
                [action.ingredientName] : state.ingretients[action.ingredientName] + 1
            }

        };
        case actionTypes.REMOVE_INGREDIENT:
        return{
            ...state,
            ingretients :{
                ...state.ingretients,
                [action.ingredientName] : state.ingretients[action.ingredientName] - 1
            }

        };
        default:
        return state;
    }
    

};

export default reducer;