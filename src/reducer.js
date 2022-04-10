export const initialState = {
    basket: [],
    user: null
};

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    console.log(action);

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,//...state means what ever the previous state is
                basket: [...state.basket, action.item],
            };

        // This code will remove all the same id from the basket

        // case 'REMOVE_FROM_BASKET':  
        //     return {
        //         ...state, basket: state.basket.filter(item => 
        //         item.id !== action.id)
            
        //     }

        // Use this instead

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basket) => basket.id === action.id

            );

            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product{id: ${action.id}} as it is not in the basket`
                )
            }

            return{
                ...state, 
                basket: newBasket
            }

            case "SET_USER":
                return {
                    ...state, 
                    user: action.user
                }

            default:
                return state; 
            }

};

export default reducer;