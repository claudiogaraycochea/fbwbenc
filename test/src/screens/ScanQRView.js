import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {BarCodeScanner, Camera, Permissions} from 'expo';
import { connect } from 'react-redux';
import { loadFromQR } from '../actions/actions';



class ScanQR extends Component {

  constructor(){
    super();
    this.state = {
      hasCameraPermission: null,
      read: null,
      type: Camera.Constants.Type.front,
    }
  }

  static navigationOptions = {
    header: (
      <View style={{padding: 10, backgroundColor: '#1f347d'}}/>
    )
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  delay = (time) => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(), time);
    });
  };

  _handleBarCodeRead = async obj => {
    // Workaround is to add a delay and check if that was already scanned
    await this.delay(500);
    if (this.state.read === obj.data) return;
    this.setState({ read: obj.data });
    this.props.loadFromQR(obj.data);
  };

  render() {
    const { hasCameraPermission } = this.state;
    const { navigate } = this.props.navigation;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            type={this.state.type}
            style={StyleSheet.absoluteFill}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigate('Welcome');
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Back{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </BarCodeScanner>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  loadFromQR: (url) => dispatch(loadFromQR(url)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ScanQR);
