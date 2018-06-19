import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Container, Div, Input, ButtonCircle } from '../styles/Theme';
import { setLocate } from '../actions/actions';
import { connect } from 'react-redux';
import AppHeader from '../components/Header';

class LocateAnotherCity extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      anotherCityName: '',
      anotherCityZipCode: '' 
    };
  }

  static navigationOptions = {
    header: (<AppHeader />)
  }

  onLocateClick = (props) =>{
    const data = {
      Name: 'local',
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
          <Text>Since you selected Another City, would you tell us the city and primary zip code below.</Text>
        </Div>
        <Div>
          <Input
            onChangeText={(anotherCityName) => this.setState({anotherCityName})}
            value={this.state.anotherCityName}
            placeholder= 'Please enter the city'
          />
        </Div>
        <Div>
          <Input
            onChangeText={(anotherCityZipCode) => this.setState({anotherCityZipCode})}
            value={this.state.anotherCityZipCode}
            placeholder= 'Please enter the zip code'
          />
        </Div>
        <Div>
          <ButtonCircle
            onPress={() => {
              if((this.state.anotherCityName!='')&&(this.state.anotherCityZipCode!='')) { 
                this.onLocateClick(); 
                navigate('SearchesOpportunities')
              }
            }}/>
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  setLocate: (locate) => dispatch(setLocate(locate))
})

export default connect(mapStateToProps,mapDispatchToProps)(LocateAnotherCity);