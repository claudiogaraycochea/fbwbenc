import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';

export default class Categories extends Component {

  static navigationOptions = {
    title: 'CATEGORIES'
  };

  state = {
    categories: [
      //{'id': 1, 'name' : 'Technology / Telecom'},
      {'id': 1, 'name' : 'Facilities'},
      {'id': 2, 'name' : 'Real Estate'}
    ],
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Hi {"Form_Contact_Name"}. Thanks for stopping by our booth. We'd love to learn a little more about your company, {"Person's Company"}. </Text>
          <Text>Can you tell me a bit about your company by selecting one of these choices?.</Text>
        </Div>
        <Div>
          {this.state.categories.map((data) => {
            return (<Button key={data.id}>{data.name}</Button>);
          })}
        </Div>
        <Div>
          <Button
            outline
            onPress={() => navigate('CategoriesValidation')}>
            NEXT
          </Button>
        </Div>
      </Container>
    )
  }
};