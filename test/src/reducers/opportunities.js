const initialState = {
  formData: {
    bagdeid: '',
    fullName: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  },
  match: false,
  categoriesFullList: [],
  subCategoriesFullList: [],
  error: false,
  errorMessage: '',
  isLoading: false,
  locate: {
    Name: '',
    AnotherCityName: '',
    AnotherCityZipCode: ''
  }
};

export default function opportunitiesConstructor(state = initialState, action) {
  switch (action.type) {

    case 'SET_OPPORTUNITIES' :
      return {
        ...state,
        opportunities: action.opportunities
      };
    case 'START_LOADING' :
      return {
        ...state,
        isLoading: true
      };

    case 'STOP_LOADING' :
      return {
        ...state,
        isLoading: false
      };

    case 'SET_CATEGORY' :
      return {
        ...state,
        categorySelected: action.categorySelected
      };

    case 'GET_FORMDATA' :
      return {
        ...state,
        formData: action.payload,
        formResponse: action.formResponse
      };

    case 'GET_FORMDATA_ERROR' :
      return {
        ...state,
        error: true,
        errorMessage: action.payload
      };

    case 'SET_MATCH' :
      return {
        ...state,
        match: action.payload
      };

    case 'GET_MATCH' :
      return {
        ...state,
        match: action.match
      };

    case 'GET_CATEGORIES' :
      return {
        ...state,
        categoriesFullList: action.payload
      };

    case 'GET_SUBCATEGORIES' :
      return {
        ...state,
        subCategoriesFullList: action.payload
      };

    case 'SET_CATEGORIES' :
      return {
        ...state,
        categories: action.categories
      };

    case 'SET_LOCATE' :
      return {
        ...state,
        locate: action.locate
      };

    case 'RESTART' :
      return {
        ...state,
        error: false,
        initialState
      };

    default:
      return state;
  }
}
