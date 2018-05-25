import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';

export default class LocateSelected extends Component {

  static navigationOptions = {
    title: 'LOCALLY'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Ok. I registered your service as {"Selected_Reach"}. Would that be for {"FORM_CITY"} or another city.</Text>
        </Div>
        <Div>
          
          <Button
            outline
            onPress={() => navigate('SearchesOportunities')}>
            FORM_CITY
          </Button>

          <Button
            outline
            onPress={() => navigate('LocallyAnotherCity')}>
            ANOTHER CITY
          </Button>

        </Div>
      </Container>
    )
  }
};