//import opportunities from "../reducers/opportunities";

const setOpportunities = opportunities => {
  return {
    type: "SET_OPPORTUNITIES",
    opportunities: opportunities
  };
};

const setCategory = categorySelected => {
  return {
    type: 'SET_CATEGORY',
    categorySelected: categorySelected
  };
};

const setCategories = categories => {
  return {
    type: 'SET_CATEGORIES',
    categories: categories
  };
};

export { setOpportunities, setCategory, setCategories };