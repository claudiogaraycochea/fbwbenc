import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';

export default class HelpUs extends Component {

  static navigationOptions = {
    title: 'HELP US'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>If you are curious we do this to help us get you into our database correctly. So thank you. Let's keep going.</Text>
        </Div>
        <Div>
          <Button
            outline
            onPress={() => navigate('Locate')}>
            Ok
          </Button>
        </Div>
      </Container>
    )
  }
};