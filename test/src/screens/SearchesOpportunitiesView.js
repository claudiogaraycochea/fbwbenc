import React, { Component } from 'react';
import { H1, Text, Container, Div, ButtonCircle } from '../styles/Theme';
import { loadMatch } from '../actions/actions';
import { connect } from 'react-redux';
import AppHeader from '../components/Header';

class SearchesOpportunities extends Component {

  static navigationOptions = {
    header: (<AppHeader />)
  }

  async onSubmitToMatch(){
    const match = await this.props.loadMatch();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Div>
          <H1>Great!</H1>
        </Div>
        <Div>
          <Text>I think we have all we need.</Text>
        </Div>
        <Div>
          <Text>Let's check to see if there are any potential opportunities that you might be able to help us with.</Text>
        </Div>
        <Div>
          <Text>While we won’t be able to share a specific opportunity today, we will be able to 
            follow-up using the information you provided to discuss potential next steps.
          </Text>
        </Div>
        <Div>
          <Text>I am just checking your responses against our current needs.</Text>
        </Div>
        <Div>
          <Text>Thanks for your patience...</Text>
        </Div>
        <Div>
          <ButtonCircle
            onPress={() => { this.onSubmitToMatch(); navigate('ThankYou');}}
          />
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  opportunitiesConstructor: state.opportunitiesConstructor
});

const mapDispatchToProps = dispatch => ({
  loadMatch: () => dispatch(loadMatch())
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchesOpportunities);