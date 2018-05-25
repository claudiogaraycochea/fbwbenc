import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';

export default class SubCategories extends Component {

  static navigationOptions = {
    title: 'SUBCATEGORIES'
  };

  state = {
    categories: [
      {'id': 1, 'name' : 'Facilities'},
      {'id': 2, 'name' : 'Real Estate'}
    ],
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>
            So would you mind telling us a bit more about your {"Selected_Category"} business?
            Here are a few options that will help us understand your business. Please pick up to 3 selections that match the goods or services you provide:
          </Text>
        </Div>
        <Div>
          {this.state.categories.map((data) => {
            return (<Button key={data.id}>{data.name}</Button>);
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