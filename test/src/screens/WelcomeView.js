import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { H1, H2, Text, Container, Div, Input, ButtonCircle, ButtonIcon } from '../styles/Theme';
import { loadForm } from '../actions/actions';
import { connect } from 'react-redux';

class Welcome extends Component {

  constructor(){
    super();
    this.state = {
      'badgeid': '',
      'initial': ''
    }
  }

  static navigationOptions = {
    header: (
      <View style={{padding: 10, backgroundColor: '#1f347d'}}/>
    )
  };

  render() {
    const { isLoading } = this.props;
    const { navigate } = this.props.navigation;
    const { badgeid, initial } = this.state;
    const allowClick = ( !isLoading && badgeid.trim()!=='' && initial.trim()!=='' ) ? false : true;
    return (
      <Container>
        <Div>
          <Image
            source={require('../img/logo-large.png')}
            style={{
              resizeMode: Image.resizeMode.cover,
              width: 360,
              height: 186,
              marginTop: 0
              }}/>
        </Div>
        <Div>
          <H1>WELCOME</H1>
        </Div>
        <Div>
          <H2>Scan your barcode</H2>
        </Div>
        <Div>
          {this.props.error ? <Div><Text>This Badge ID does not exist</Text></Div> : null }
          <Input
            ref={(input) => { this.inputBagdeid = input; }}
            onChangeText={(badgeid) => this.setState({badgeid})}
            placeholder= 'Bar Code'
          />
        </Div>
        <Div>
          <Input
            ref={(input) => { this.inputInitial = input; }}
            onChangeText={(initial) => this.setState({initial})}
            placeholder= 'Last Name Initial'
          />
        </Div>
        <Div>
          <ButtonCircle
            readOnly={allowClick}
            onPress={() => { this.props.loadForm(this.state.badgeid,this.state.initial); }}
          />
        </Div>
        <Div>
          <ButtonIcon
            icon={require('../img/icon-qrcode.png')}
            onPress={() => navigate('ScanQR')}>
            I have a QR
          </ButtonIcon>
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  categorySelected: state.opportunitiesConstructor.categorySelected,
  error: state.opportunitiesConstructor.error,
  errorMessage: state.opportunitiesConstructor.errorMessage,
  isLoading: state.opportunitiesConstructor.isLoading
});

const mapDispatchToProps = dispatch => ({
  loadForm: (badgeid,initial) => dispatch(loadForm(badgeid,initial)),
  setCategory: (id, name) => dispatch(setCategory(id, name)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Welcome);
