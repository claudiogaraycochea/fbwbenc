import React, { Component } from 'react';
import { Text, Button, Container, Div, ButtonCircle } from '../styles/Theme';
import { setCategories, getSubCategories } from '../actions/actions';
import { connect } from 'react-redux';
import AppHeader from '../components/Header';

class SubCategories extends Component {

  static navigationOptions = {
    header: (<AppHeader />)
  }

  state = {
    categories: []
  }

  componentWillMount(){
    this.props.getSubCategories(this.props.categorySelected.id);
  }

  existCategories = (props) = (itemRange) => {
    const categoriesArray = this.state.categories;
    const result = categoriesArray.filter(item => item.range === itemRange);
    if(result.length === 1) {
      return true;
    }
    return false;
  }

  getColor = (props) = (itemRange) => {
    if(this.existCategories(itemRange)){
      return {backgroundColor: '#0072bf'};
    }
    return {backgroundColor: '#eeeeee'};
  }

  onSelectedItemClick = (itemRange,itemTAX) => {
    const categoriesArray = this.state.categories;
    if(this.existCategories(itemRange)){
      /* Remove Item */
      this.setState({
        categories: categoriesArray.filter(item => item.range !== itemRange)
      });
    }
    else{
      if(categoriesArray.length<3){
        /* Add Item */
        const data = {
          range: itemRange,
          tax: itemTAX
        };
        this.setState({
          categories: this.state.categories.concat(data)
        });
      } else {
        console.log('Error: Only can select 3 items');
      }
    }

  }

  render() {
    const { navigate } = this.props.navigation;
    const subCategoriesFullList = this.props.subCategoriesFullList;
    return (
      <Container>
        <Div>
          <Text>Next, we’d like to learn more about your {this.props.categorySelected.name} business?</Text>
        </Div>
        <Div>
          <Text>Here are a few options. Please choose up to 3 selections that match the goods or services you provide:</Text>
        </Div>
        <Div>
          {subCategoriesFullList.map((data) => {
            return (
              <Button 
                key={data.id} 
                onPress={() => { this.onSelectedItemClick(data.range,data.tax) }}
                style={this.getColor(data.range)}
              >
                {data.name}
              </Button>);
          })}
        </Div>
        <Div>
          <ButtonCircle
            readOnly={ this.state.categories.length>0 ? false : true }
            onPress={() => { 
              if(this.state.categories.length>0) { 
                this.props.setCategories(this.state.categories); 
                navigate('HelpUs')
              }
            }}
          />
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  categorySelected: state.opportunitiesConstructor.categorySelected,
  subCategoriesFullList: state.opportunitiesConstructor.subCategoriesFullList
})

const mapDispatchToProps = dispatch => ({
  getSubCategories: (id) => { dispatch(getSubCategories(id)) },
  setCategories: (categories) => { dispatch(setCategories(categories))}
})

export default connect(mapStateToProps,mapDispatchToProps)(SubCategories);