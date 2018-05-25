import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { H1, H2, Text, Button, Container, Div, Input } from '../styles/Theme';

console.disableYellowBox = true;

export default class Welcome extends Component {

  state = {
    actcode: '0000000000000000'
  }

  onFocus() {
    this.setState({
        backgroundColor: 'green'
    })
  };

  onBlur() {
    this.setState({
      backgroundColor: '#ededed'
    })
  };

  static navigationOptions = {
    header: ( /* Your custom header */
      <View
        style={{
          height: 240,
          marginTop: 0, /* only for IOS to give StatusBar Space */
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image 
          source={require('../img/logo.png')} 
          style={{
            resizeMode: Image.resizeMode.cover,
            width: 300,
            height: 148,
            marginTop: 20
            }}/>
      </View>
    )
  };

  componentDidMount() {
    console.log('component did mount');
  }

  render() {
    const { navigate } = this.props.navigation;

    /* Make a focus on the input */
    const didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        console.log('didFocus');
        //this.inputActcode.autoFocus='true';
        didFocusSubscription.remove();
      }
    );

    return (
      <Container>
        <Div>
          <H1>WELCOME</H1>
          <H2>SCAN YOUR BAR-CODE</H2>
        </Div>
        <Div>
          <Input
            ref={(input) => { this.inputActcode = input; }} 
            onFocus={()=> this.onFocus()}
            autoFocus={true}
            onChangeText={(actcode) => this.setState({actcode})}
            value={this.state.actcode}
            placeholder= 'Bar Code'
            style={{ height:60, backgroundColor: this.state.backgroundColor }}
          />
        </Div>
        <Div>
          <Button
            outline
            onPress={() => navigate('Categories')}>
            NEXT
          </Button>
        </Div>
      </Container>
    )
  }
};