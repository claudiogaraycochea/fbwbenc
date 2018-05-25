import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div, Input } from '../styles/Theme';

export default class LocateAnotherCity extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      anotherCityName: '',
      anotherCityZipCode: '' 
    };
  }

  static navigationOptions = {
    title: 'ANOTHER CITY'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Since you selected {"ANOTHER_CITY"}, would you tell us the city and zip code below.</Text>
        </Div>
        <Div>
          <Input
            onChangeText={(anotherCityName) => this.setState({anotherCityName})}
            value={this.state.anotherCityName}
            placeholder= 'City'
          />
        </Div>
        <Div>
          <Input
            onChangeText={(anotherCityZipCode) => this.setState({anotherCityZipCode})}
            value={this.state.anotherCityZipCode}
            placeholder= 'Zip Code'
          />
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