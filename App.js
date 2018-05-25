import React from 'react';
import { createStackNavigator } from 'react-navigation';

/* Navitation */
import Welcome from './src/screens/WelcomeView';
import Categories from './src/screens/CategoriesView';
import CategoriesValidation from './src/screens/CategoriesValidationView';
import SubCategories from './src/screens/SubCategoriesView';
import HelpUs from './src/screens/HelpUsView';
import Locate from './src/screens/LocateView';
import LocallySelected from './src/screens/LocallySelectedView';
import LocallyAnotherCity from './src/screens/LocallyAnotherCityView';
import SearchesOpportunities from './src/screens/SearchesOpportunitiesView';
import ThankYou from './src/screens/ThankYouView';

const App = createStackNavigator({
  Welcome: { screen: Welcome },
  Categories: { screen: Categories },
  CategoriesValidation: { screen: CategoriesValidation },
  SubCategories: { screen: SubCategories },
  HelpUs: { screen: HelpUs },
  Locate: { screen: Locate },
  LocallySelected: { screen: LocallySelected },
  LocallyAnotherCity: { screen: LocallyAnotherCity },
  SearchesOportunities: { screen: SearchesOpportunities },
  ThankYou: { screen: ThankYou }
});

export default App;