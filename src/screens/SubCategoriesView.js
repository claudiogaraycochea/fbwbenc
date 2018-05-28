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
    categories: [
      {'Range': 43, 'SubCategory' : 'Telecom Services'},
      {'Range': 44, 'SubCategory' : 'Telecom Equipment'},
      {'Range': 45, 'SubCategory' : 'Technical Services'}
    ],
  }

  addSelectedItem = (itemRange,itemSubCategory) => {
    console.log('itemRange: ',itemRange,' / itemSubCategory: ',itemSubCategory);
    //const TAX = `{this.props.categorySelected}_{itemSubCategory}`
    const data = {
      Range: itemRange,
      TAX: itemSubCategory
    }

    this.props.setCategories(data);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>
            So would you mind telling us a bit more about your "{this.props.categorySelected}" business?
            Here are a few options that will help us understand your business. Please pick up to 3 selections that match the goods or services you provide:
          </Text>
        </Div>
        <Div>
          {this.state.categories.map((data) => {
            return (<Button key={data.Rage} onPress={() => {this.addSelectedItem(data.Range,data.SubCategory)}}>{data.SubCategory}</Button>);
          })}
        </Div>
        <Div>
          <Button
            outline
            onPress={() => navigate('HelpUs')}>
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