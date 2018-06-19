import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Container, Div, DivCenter } from '../styles/Theme';
import { setLocate } from '../actions/actions';
import { connect } from 'react-redux';
import AppHeader from '../components/Header';

class Locate extends Component {

  static navigationOptions = {
    header: (<AppHeader />)
  }

  onLocateClick = (locateOption) =>{
    const data = {
      Name: locateOption,
      AnotherCityName: '',
      AnotherCityZipCode: ''
    }
    this.props.setLocate(data);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <Text>Do you provide your products or services locally, nationally (US), or 
            globally? Please answer for the categories you previously selected based on 
            your capabilities and experience today.
          </Text>
        </Div>
        <Div>
          <Button
            outline
            onPress={() => navigate('LocallySelected')}>
            LOCALLY
          </Button>
          <Button
            outline
            onPress={() => {this.onLocateClick('national');navigate('SearchesOpportunities');}}>
            NATIONALLY
          </Button>
          <Button
            outline
            onPress={() => {this.onLocateClick('global');navigate('SearchesOpportunities');}}>
            GLOBALLY
          </Button>
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setLocate: (locate) => dispatch(setLocate(locate))
})

export default connect(mapStateToProps,mapDispatchToProps)(Locate);