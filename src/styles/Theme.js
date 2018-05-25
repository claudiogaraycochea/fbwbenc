import React from 'react';
import { TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import styled, { css } from 'styled-components';

/* Container */
export const Container = (props) => {
  return (
    <ContainerView>
      <ContainerScroll
        style={{
          flex: 1,
          backgroundColor: '#3b539a',
          padding: 40
        }}>
        {props.children}
      </ContainerScroll>
    </ContainerView>
  );
}

const ContainerScroll = styled.ScrollView`
  padding: 40px 10%
`;

const ContainerView = styled.View`
  flex: 1;
  background-color: #3b539a;
  width: 100%;
`;

/* / Container */


export const Div = styled.View`
  margin-bottom: 20px;
  /*align-items: center;*/
  /*justify-content: center;*/
  flex-direction: row;
  flex-wrap: wrap;
`;

/* Text */
export const Text = styled.Text`
  font-size: 28px;
  color: #FFFFFF;
  /*text-align: center;*/
  /*padding: 10px;*/
  width: 100%;
`;

export const H1 = styled.Text`
  font-size: 40;
  /*text-align: center;*/
  color: #FFFFFF;
  width: 100%;
`;

export const H2 = styled.Text`
  font-size: 30;
  /*text-align: center;*/
  color: #CCCCCC;
  width: 100%;
`;

/* / Text */

/* Input */
export const Input = styled.TextInput`
  backgroundColor: #FFFFFF;
  padding: 10px 20px;
  font-size: 26px;
  border-radius: 10px;
  width: 100%;
`;
/* / Text */

/* Button */
const colors = {
  accent: '#527bbe',
  highlight: '#4c89ec',
  contrast: '#FFF',
};

const Label = styled.Text`
  color: ${props => !props.outline ? colors.contrast : colors.accent};
  font-weight: 700;
  align-self: center;
  font-size: 20px;
  padding: 10px;
`

const ButtonContainer = styled.TouchableHighlight`
  background-color: ${props => props.outline ? colors.contrast : colors.accent};
  padding: 10px;
  border-color: ${colors.accent};
  border-radius: 10px;
  margin-right: 20px;
  align-self: center;
`

export const Button = (props) => {
  return (
    <ButtonContainer
        onPress={props.onPress}
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

const ButtonCirleContainer = styled.TouchableHighlight`
  background-color: ${props => props.outline ? colorsCircle.contrast : colorsCircle.accent};
  width: 100%;
  border-color: ${colorsCircle.accent};
  margin: 0 auto;
`

export const ButtonCircle = (props) => {
  return (
    <TouchableOpacity
      style={{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width: 140,
          height: 140,
          backgroundColor:'#fff',
          borderRadius:100
        }}
        outline
        onPress= {props.onPress}
        underlayColor= {colorsCircle.highlight}
      >
      <Text>Next</Text>
    </TouchableOpacity>
  );
};
/* / ButtonCircle */