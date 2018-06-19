import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';
import { loadMatch, restart, navGoBack } from '../actions/actions';
import { connect } from 'react-redux';

class AppHeader extends Component {

  async goHomeToMatch(){
    const match = await this.props.loadMatch();
    console.log('Go Home');
  }
  
  render() {
    return (
      <View
        style={{
          height: 20,
          backgroundColor: '#1f347d'
        }}>
        <Div
          style={{
            padding: 20,
            justifyContent: 'space-between'
          }}
          >
          <TouchableOpacity onPress={() => { 
            this.props.navGoBack()
          }}>
            <Image 
              source={require('../img/icon-back.png')} 
              style={{
                resizeMode: Image.resizeMode.cover,
                width: 32,
                height: 32
                }}/>
          </TouchableOpacity>
          <Image 
            source={require('../img/logo-inside.png')} 
            style={{
              resizeMode: Image.resizeMode.cover,
              width: 140,
              height: 60,
              marginTop: 40
              }}/>
          <TouchableOpacity onPress={() => { this.goHomeToMatch(); this.props.restart() }}>
            <Image 
              source={require('../img/icon-home.png')} 
              style={{
                resizeMode: Image.resizeMode.cover,
                width: 32,
                height: 32
                }}/>
          </TouchableOpacity>
        </Div>
      </View>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loadMatch: () => dispatch(loadMatch()),
  restart: () => dispatch(restart()),
  navGoBack: () => dispatch(navGoBack()),
});

export default connect(mapStateToProps,mapDispatchToProps)(AppHeader);