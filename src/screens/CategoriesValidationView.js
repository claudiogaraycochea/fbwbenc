import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';
import { setCategory } from '../actions/actions';
import { connect } from 'react-redux';

class CategoriesValidation extends Component {

  static navigationOptions = {
    title: 'CATEGORIES'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Great! You chose "{this.props.categorySelected}". Is that right the category?.</Text>
        </Div>
        <Div>

          <Button
            outline
            onPress={() => navigate('SubCategories')}>
            YES
          </Button>

          <Button
            outline
            onPress={() => navigate('Categories')}>
            NO
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
    setCategory(categorySelected){
      dispatch(setCategory(categorySelected));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesValidation);