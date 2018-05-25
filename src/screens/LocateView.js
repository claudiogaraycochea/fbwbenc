import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div, DivCenter } from '../styles/Theme';

export default class Locate extends Component {

  static navigationOptions = {
    title: 'LOCATE'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Would you say you provide your products or services - locally, nationally, or globally?</Text>
        </Div>
        <Div>
          <Button
            outline
            onPress={() => navigate('LocallySelected')}>
            LOCALLY
          </Button>
          <Button
            outline
            onPress={() => navigate('SearchesOportunities')}>
            NATIONALLY
          </Button>
          <Button
            outline
            onPress={() => navigate('SearchesOportunities')}>
            GLOBALLY
          </Button>
        </Div>
      </Container>
    )
  }
};