import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';
import { setLocate } from '../actions/actions';
import { connect } from 'react-redux';
import AppHeader from '../components/Header';

class LocateSelected extends Component {

  static navigationOptions = {
    header: (<AppHeader />)
  }

  removeCategory = (TAX) =>{
    let TAXArray=TAX.split('_');
    return TAXArray[1];
  }
  
  getSelectedReach = (categories) => {
    let selectedReach = '';
    let separator = '';
    for (let i=0;i<categories.length;i++){
      let TAX=this.removeCategory(categories[i]['tax']);
      if (selectedReach!=''){
        if((categories.length-1)==i){
          separator = ' and ';
        }
        else {
          separator = ', ';
        }
      }
      selectedReach = selectedReach+separator+TAX;
    }
    return selectedReach;
  }

  onLocateClick = (props) =>{
    const data = {
      Name: 'local',
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
          <Text>Ok. You selected {this.getSelectedReach(this.props.categories)}. Is that only for {this.props.FormCity} or are there other US cities where you provide that?</Text>
        </Div>
        <Div>
          
          <Button
            outline
            onPress={() => {this.onLocateClick(this.props.FormCity); navigate('SearchesOpportunities')}}>
            {this.props.FormCity}
          </Button>

          <Button
            outline
            onPress={() => navigate('LocallyAnotherCity')}>
            Another City
          </Button>

        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  FormCity: state.opportunitiesConstructor.formData.city,
  categories: state.opportunitiesConstructor.categories
})

const mapDispatchToProps = dispatch => ({
  setLocate: (locate) => dispatch(setLocate(locate))
})

export default connect(mapStateToProps,mapDispatchToProps)(LocateSelected);