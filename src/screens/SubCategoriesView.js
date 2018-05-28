import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';
import { setCategories } from '../actions/actions';
import { connect } from 'react-redux';

class SubCategories extends Component {

  static navigationOptions = {
    title: 'SUBCATEGORIES'
  };

  state = {
    categoriesList: [
      {'Range': 43, 'SubCategory' : 'Telecom Services'},
      {'Range': 44, 'SubCategory' : 'Telecom Equipment'},
      {'Range': 45, 'SubCategory' : 'Technical Services'}
    ],
    categories: []
  }

  addSelectedItem = (itemRange,itemSubCategory) => {
    const categoriesArray = this.state.categories;

    if(categoriesArray.length<2){
      const TAX = `${this.props.categorySelected}_${itemSubCategory}`;
      const data = {
        Range: itemRange,
        TAX: TAX
      };

      this.setState({
        categories: this.state.categories.concat(data)
      });
    } else {
      console.log('Error: Only can select 3 items');
    }

  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.state.categories);
    return (
      <Container>
        <Div>
          <Text>
            So would you mind telling us a bit more about your "{this.props.categorySelected}" business?
            Here are a few options that will help us understand your business. Please pick up to 3 selections that match the goods or services you provide:
          </Text>
        </Div>
        <Div>
          {this.state.categoriesList.map((data,i) => {
            return (<Button key={i} onPress={() => {this.addSelectedItem(data.Range,data.SubCategory)}}>{data.SubCategory}</Button>);
          })}
        </Div>
        <Div>
          <Button
            outline
            onPress={() => {this.props.setCategories(this.state.categories); navigate('HelpUs')}}>
            NEXT
          </Button>
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => {
  return {
    categorySelected: state.opportunitiesConstructor.categorySelected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCategories(categories){
      dispatch(setCategories(categories));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SubCategories);