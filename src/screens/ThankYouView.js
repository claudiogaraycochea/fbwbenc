import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { H1, Text, Button, Container, Div } from '../styles/Theme';

export default class ThankYou extends Component {

  static navigationOptions = {
    title: 'THANKS'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Matched/Not Matched Message</Text>
          <H1>Thank You</H1>
        </Div>
        <Div>
          <Button
            outline
            onPress={() => navigate('Welcome')}>
            START
          </Button>
        </Div>
      </Container>
    )
  }
};