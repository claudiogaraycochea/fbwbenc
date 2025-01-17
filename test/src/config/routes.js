/* Navitation */
import Welcome from '../screens/WelcomeView';
import ScanQR from '../screens/ScanQRView';
import Categories from '../screens/CategoriesView';
import CategoriesValidation from '../screens/CategoriesValidationView';
import SubCategories from '../screens/SubCategoriesView';
import HelpUs from '../screens/HelpUsView';
import Locate from '../screens/LocateView';
import LocallySelected from '../screens/LocallySelectedView';
import LocallyAnotherCity from '../screens/LocallyAnotherCityView';
import SearchesOpportunities from '../screens/SearchesOpportunitiesView';
import ThankYou from '../screens/ThankYouView';

const Routes = {
  Welcome: { screen: Welcome },
  ScanQR: { screen: ScanQR },
  Categories: { screen: Categories },
  CategoriesValidation: { screen: CategoriesValidation },
  SubCategories: { screen: SubCategories },
  HelpUs: { screen: HelpUs },
  Locate: { screen: Locate },
  LocallySelected: { screen: LocallySelected },
  LocallyAnotherCity: { screen: LocallyAnotherCity },
  SearchesOpportunities: { screen: SearchesOpportunities },
  ThankYou: { screen: ThankYou }
}

export default Routes;
