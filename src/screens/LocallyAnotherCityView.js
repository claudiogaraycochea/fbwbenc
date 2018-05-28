import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div, Input } from '../styles/Theme';
import { setLocate } from '../actions/actions';
import { connect } from 'react-redux';

class LocateAnotherCity extends Component {
  
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

  onLocateClick = (props) =>{
    const data = {
      Name: 'Locally',
      AnotherCityName: this.state.anotherCityName,
      AnotherCityZipCode: this.state.anotherCityZipCode
    }
    this.props.setLocate(data);
  }

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
            onPress={() => {this.onLocateClick(); navigate('SearchesOpportunities')}}>
            YES
          </Button>

        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    setLocate(locate){
      dispatch(setLocate(locate));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LocateAnotherCity);