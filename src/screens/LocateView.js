import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Container, Div, DivCenter } from '../styles/Theme';
import { setLocate } from '../actions/actions';
import { connect } from 'react-redux';

class Locate extends Component {

  static navigationOptions = {
    title: 'LOCATE'
  };

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
            onPress={() => {this.onLocateClick('Nationally');navigate('SearchesOpportunities');}}>
            NATIONALLY
          </Button>
          <Button
            outline
            onPress={() => {this.onLocateClick('Globally');navigate('SearchesOpportunities');}}>
            GLOBALLY
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

export default connect(mapStateToProps,mapDispatchToProps)(Locate);