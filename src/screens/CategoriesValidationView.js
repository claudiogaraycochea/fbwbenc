import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';

export default class CategoriesValidation extends Component {

  static navigationOptions = {
    title: 'CATEGORIES'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Great! You chose {"Selected_Category"}. Is that right the category?.</Text>
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