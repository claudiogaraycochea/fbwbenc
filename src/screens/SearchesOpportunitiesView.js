import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { H1, Text, Button, Container, Div } from '../styles/Theme';
import { connect } from 'react-redux';

class SearchesOpportunities extends Component {

  static navigationOptions = {
    title: 'OPPORTUNITIES'
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(JSON.stringify(this.props.opportunitiesConstructor));
    return (
      <Container>
        <Div>
          <H1>Great!</H1> 
          <Text>I think we have all we need.</Text>
          <Text>Let's check the database to see if there are current opportunities you can help us with.</Text>
          <Text>Most of the time we won't have actionable opportunity but when we do you will be on our list.</Text>
          <Text>I am just checking your responses against our current needs.</Text>
          <Text>Thanks for your patience...</Text>
        </Div>
        <Div>
          <Button
            outline
            onPress={() => navigate('ThankYou')}>
            Ok
          </Button>
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => {
  return {
    opportunitiesConstructor: state.opportunitiesConstructor
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchesOpportunities);