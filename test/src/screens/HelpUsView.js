import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Container, Div, ButtonCircle } from '../styles/Theme';
import AppHeader from '../components/Header';

export default class HelpUs extends Component {

  static navigationOptions = {
    header: (<AppHeader />)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Thanks for providing this information. We’re asking these questions 
            to better understand your company and match your primary goods and services 
            to areas of potential opportunity for our company.
          </Text>
        </Div>
        <Div>
          <Text>Let’s keep going.</Text>
        </Div>
        <Div>
          <ButtonCircle
            onPress={() => navigate('Locate')}
          />
        </Div>
      </Container>
    )
  }
};