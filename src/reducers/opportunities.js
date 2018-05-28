const initialState = {};

export default function opportunitiesConstructor(state = initialState, action) {
  switch (action.type) {

    case 'SET_OPPORTUNITIES' :
      return {
        ...state,
        opportunities: action.opportunities
      };
    
    case 'SET_CATEGORY' :
      return {
        ...state,
        categorySelected: action.categorySelected
      };
  
    case 'SET_CATEGORIES' :
      return {
        ...state,
        categories: action.categories
      };

    default:
      return state;
  }
}