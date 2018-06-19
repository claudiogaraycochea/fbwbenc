import axios from 'axios';
import { API_FORM, API_OPPORTUNITIES } from '../config/constants';
import categoriesData from '../data/categoriesData.json';
import { NavigationActions } from 'react-navigation';

const loadForm = (connectkey,initial) => (dispatch) => {
  dispatch({
    type: 'START_LOADING',
  });
  return axios.get(`${API_FORM}&connectkey=${connectkey}&lastinitial=${initial}`)
    .then( (response) => {
      console.log('Form Response',response.data.Success);
      console.log(`${API_FORM}&connectkey=${connectkey}&lastinitial=${initial}`);
      if(response.data.Success){
        const formData = {
          bagdeid: response.data.LeadInfo.LeadID ? response.data.LeadInfo.LeadID : connectkey,
          fullName: response.data.LeadInfo.FirstName ? `${response.data.LeadInfo.FirstName} ${response.data.LeadInfo.LastName}` : 'Missing Full Name',
          company: response.data.LeadInfo.Company ? response.data.LeadInfo.Company : 'Missing Company',
          address: response.data.LeadInfo.Address ? response.data.LeadInfo.Address : 'Missing Address',
          city: response.data.LeadInfo.City ? response.data.LeadInfo.City : 'Missing City',
          state: response.data.LeadInfo.StateCode ? response.data.LeadInfo.StateCode : 'Missing State Code',
          zipCode: response.data.LeadInfo.ZipCode ? response.data.LeadInfo.ZipCode : 'Missing Zip Code'
        }
        dispatch ( {
          type: "GET_FORMDATA",
          payload: formData
        });
        dispatch({
          type: "STOP_LOADING"
        });
        dispatch( NavigationActions.navigate({routeName: 'Categories'}) );
      }
      else {
        dispatch({
          type: "STOP_LOADING"
        });
        dispatch ({
          type: "GET_FORMDATA_ERROR",
          payload: "This Badge ID does not exist"
        })
      }
    } )
    .catch( (error) => {
      console.log(error);
    } )
};

const loadFromQR = (url) => (dispatch) => {
  dispatch({
    type: 'START_LOADING',
  });
  return axios.get(`${API_FORM}&barcode=${url}`)
    .then( (response) => {
      console.log('Form Response',response.data.Success);
      if(response.data.Success){
        const formData = {
          bagdeid: response.data.LeadInfo.LeadID ? response.data.LeadInfo.LeadID : '0',
          fullName: response.data.LeadInfo.FirstName ? `${response.data.LeadInfo.FirstName} ${response.data.LeadInfo.LastName}` : 'Missing Full Name',
          company: response.data.LeadInfo.Company ? response.data.LeadInfo.Company : 'Missing Company',
          address: response.data.LeadInfo.Address ? response.data.LeadInfo.Address : 'Missing Address',
          city: response.data.LeadInfo.City ? response.data.LeadInfo.City : 'Missing City',
          state: response.data.LeadInfo.StateCode ? response.data.LeadInfo.StateCode : 'Missing State Code',
          zipCode: response.data.LeadInfo.ZipCode ? response.data.LeadInfo.ZipCode : 'Missing Zip Code'
        }
        dispatch ( {
          type: "GET_FORMDATA",
          payload: formData
        });
        dispatch({
          type: "STOP_LOADING"
        });
        dispatch( NavigationActions.navigate({routeName: 'Categories'}) );
      }
      else {
        dispatch({
          type: "STOP_LOADING"
        });

        dispatch ({
          type: "GET_FORMDATA_ERROR",
          payload:'This Barcode is for a different event..'
        })
        dispatch( NavigationActions.navigate({routeName: 'Welcome'}) );
      }
    } )
    .catch( (error) => {
      console.log(error);
    } )
};

const loadMatch = () => (dispatch, getStore) => {
  const store = getStore().opportunitiesConstructor;
  const userOpportunitiesData = {
    "confirmationID": store.formData.bagdeid,
    "formAddress": store.formData.address,
    "formCompany": store.formData.company,
    "formFullName": store.formData.fullName,
    "formCity": store.formData.city,
    "formState": store.formData.state,
    "formZipCode": store.formData.zipCode,
    "categories": store.categories,
    "opportunities": true,
    "officeData": "DC",
    "locate": {
        "name": store.locate.Name,
        "anotherCityName": store.locate.AnotherCityName,
        "anotherCityZipCode": store.locate.AnotherCityZipCode
    }
  }
  axios.post(`${API_OPPORTUNITIES}evaluate-opportunity`,userOpportunitiesData)
    .then( (response) => {
      const success = (response.data && response.data.match) ? true : false;
      dispatch ( {
        type: "SET_MATCH",
        payload: success
      })
    } )
    .catch( (error) => {
      console.log(error);
    } )
};

const getMatch = (match) => {
  return {
    type: 'SET_MATCH',
    match: match
  };
};

const setOpportunities = opportunities => {
  return {
    type: "SET_OPPORTUNITIES",
    opportunities: opportunities
  };
};

const getCategories = () => {
  list = categoriesData.CategoriesList.items;
  return {
    type: 'GET_CATEGORIES',
    payload: list
  }
}

const getSubCategories = (categoryID) => {
  list = categoriesData.SubCategoriesList[categoryID].items;
  return {
    type: 'GET_SUBCATEGORIES',
    payload: list
  }
}

const setCategory = (id, name) => {
  let data = { id, name };
  return {
    type: 'SET_CATEGORY',
    categorySelected: data
  };
};

const setCategories = categories => {
  return {
    type: 'SET_CATEGORIES',
    categories: categories
  };
};

const setLocate = locate => {
  return {
    type: 'SET_LOCATE',
    locate: locate
  };
};

const restart = () => (dispatch) => {
  dispatch ( {
    type: 'RESTART'
  } );
  dispatch( NavigationActions.navigate({routeName: 'Welcome'}) );
};

const navGoBack = () => (dispatch) => {
  dispatch( NavigationActions.back({}));
};

export { loadForm, loadFromQR, setOpportunities, setCategory, setCategories, setLocate, getCategories, getSubCategories, loadMatch, getMatch, restart, navGoBack };
