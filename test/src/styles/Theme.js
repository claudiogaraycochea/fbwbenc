import React from 'react';
import { TouchableOpacity, ScrollView, Image, TextInput, View } from 'react-native';
import styled, { css } from 'styled-components';

/* Container */
export const Container = (props) => {
  return (
    <ContainerView
      style={{
        backgroundColor: '#1f347d'
      }}
      >
      <Image
        source={require('../img/background.png')}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover'
          }}/>
      <ContainerScroll
        style={{
          flex: 1,
          padding: 40,
          paddingTop: 120
        }}>
        {props.children}
      </ContainerScroll>
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          backgroundColor: '#10183a',
          width: '100%',
          padding: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold'
          }}
          >Facebook Supplier Diversity</Text>
      </View>
    </ContainerView>
  );
}

const ContainerScroll = styled.ScrollView`
  padding: 10% 10%;
  padding-bottom: 0%;
`;

const ContainerView = styled.View`
  flex: 1;
  width: 100%;
`;

/* / Container */


export const Div = styled.View`
  margin-bottom: 30;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

/* Text */
export const Text = styled.Text`
  font-size: 20;
  color: #FFFFFF;
  text-align: center;
`;

export const H1 = styled.Text`
  font-size: 48;
  font-weight: bold;
  color: #ff0085;
`;

export const H2 = styled.Text`
  font-size: 30;
  color: #a5acc7;
  padding-bottom: 5;
`;

/* Input */
export const Input = styled.TextInput`
  backgroundColor: #FFFFFF;
  color: #222222;
  padding: 20px 40px;
  width: 60%
  font-size: 20;
  border-radius: 5;
`;

/* Button */
const colors = {
  accent: '#eeeeee',
  highlight: '#0072bf',
  contrast: '#222222',
};

const Label = styled.Text`
  color: ${props => !props.outline ? colors.contrast : colors.accent};
  font-weight: 700;
  align-self: center;
  font-size: 16;
  padding: 10px;
`

const ButtonContainer = styled.TouchableHighlight`
  background-color: ${props => props.outline ? colors.contrast : colors.accent};
  padding: 2% 5%;
  border-color: ${colors.accent};
  border-radius: 5;
  margin-right: 10;
  margin-bottom: 10;
  align-self: center;
`

export const Button = (props) => {
  return (
    <ButtonContainer
        onPress={props.onPress}
        style={props.style}
        underlayColor={colors.highlight}>
      <Label>
        {props.children}
      </Label>
    </ButtonContainer>
  );
};
/* / Button */

/* ButtonCircle */
const colorsCircle = {
  accent: '#527bbe',
  highlight: '#4c89ec',
  contrast: '#FFF',
};

export const ButtonCircle = (props) => {

  const buttonBackground = props.readOnly ? '#4d4d4d' : '#3eb55a';
  return (
    <TouchableOpacity
      disabled={props.readOnly}
      style={{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width: 140,
          height: 140,
          backgroundColor: buttonBackground,
          borderRadius:100
        }}
        outline
        onPress= {props.onPress}
        underlayColor= {colorsCircle.highlight}
      >
      <Image
          source={require('../img/icon-check.png')}
          style={{
            resizeMode: Image.resizeMode.cover,
            width: 64,
            height: 64
            }}/>
    </TouchableOpacity>
  );
};
/* / ButtonCircle */

export const ButtonIcon = (props) => {
  const buttonBackground = '#3eb55a';
  return (
    <TouchableOpacity
      style={{
          alignItems:'center',
          justifyContent:'center',
          borderRadius: 1,
          height: 60,
          paddingLeft: 10,
          paddingRight: 20,
          backgroundColor: buttonBackground,
          borderRadius: 5
        }}
        onPress={props.onPress}
      >
      <Image
        source={props.icon}
        style={{
          resizeMode: Image.resizeMode.cover,
          width: 32,
          height: 32,
          position: 'absolute',
          left: 20
          }}
      />
      <Text 
        style={{
          marginLeft: 50
        }}
      >{props.children}</Text>
    </TouchableOpacity>
  );
};
/* / ButtonCircle */
