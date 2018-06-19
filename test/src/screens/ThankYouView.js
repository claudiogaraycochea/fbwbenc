import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { H1, Text, Button, Container, Div } from '../styles/Theme';
import { restart } from '../actions/actions';
import { connect } from 'react-redux';

class ThankYou extends Component {

  static navigationOptions = {
    header: (      
      <View
        style={{
          height: 0,
          padding: 10, backgroundColor: '#1f347d'
        }}>
        <Div
          style={{
            padding: 40,
            paddingTop: 50,
            justifyContent: 'center',
          }}
          >
          <Image 
            source={require('../img/logo-inside.png')} 
            style={{
              resizeMode: Image.resizeMode.cover,
              width: 140,
              height: 60,
              marginTop: 40
              }}/>
        </Div>
      </View>
    )
  }
  
  render() {
    const { match } = this.props;
    console.log('Match',{match})
    return (
      <Container>
        <Div>
          {match ? (
            <Div>
              <Div>
                <Text>Good news!</Text>
              </Div>
              <Div>
                <Text>Based on your responses and our current needs,  we’d like to learn more about your capabilities.</Text>
              </Div>
              <Div>
                <Text>This doesn’t mean that we have a specific opportunity in mind, but that there was a good match 
                  between what you do and what we need. We’ll follow-up with an email this week so you can provide 
                  some additional information for our team to consider. 
                </Text>
              </Div>
              <Div>
                <Text>In the meantime, we’d encourage you to go to our Facebook page and connect with us there. 
                  You can message the team directly or send us an email at supplierdiversity@fb.com.
                </Text>
              </Div>
              <Div>
                <Text>Enjoy the rest of the conference!</Text>
              </Div>
            </Div>
            ): (
            <Div>
              <Div>
                <Text>Unfortunately, it appears that we don’t have any potential opportunities at this time given the responses you provided.</Text>
              </Div>
              <Div>
                <Text>But this isn’t a “no”! Things are always happening at Facebook and our needs are constantly evolving.</Text>
              </Div>
              <Div>
                <Text>We’d encourage you to go to our Facebook page and connect with us there. You can message the team directly or send us an email at supplierdiversity@fb.com.</Text>
              </Div>
              <Div>
                <Text>Of course, you can also visit with the team in the booth today if you’d like to have a live conversation with a Facebook sourcing manager.</Text>
              </Div>
              <Div>
                <Text>Thanks for stopping by and have a great conference!</Text>
              </Div>
            </Div>
            )}
        </Div>
        <Div>
          <Button
            outline
            onPress={() => this.props.restart()}>
            START
          </Button>
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  match: state.opportunitiesConstructor.match
});

const mapDispatchToProps = dispatch => ({
  restart: () => dispatch(restart())
});

export default connect(mapStateToProps,mapDispatchToProps)(ThankYou);