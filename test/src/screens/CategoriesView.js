import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Container, Div } from '../styles/Theme';
import { setCategory, getCategories, loadMatch } from '../actions/actions';
import { connect } from 'react-redux';
import AppHeader from '../components/Header';

class Categories extends Component {

  componentWillMount(){
    this.props.getCategories();
  }

  static navigationOptions = {
    header: (<AppHeader />)
  }
  
  async onSubmitToMatch(){
    const match = await this.props.loadMatch();
  }

  render() {
    const { navigate } = this.props.navigation;
    const categoriesFullList = this.props.categoriesFullList;
    let categories = categoriesFullList;
    return (
      <Container>
        <Div>
          <Text>Hi {this.props.FormFullName}. Thanks for stopping by our booth. We'd love to learn a little more about your company, {this.props.FormCompany}.</Text>
        </Div>
        <Div>
          <Text>Which category best describes your company? Select one below:</Text>
        </Div>
        <Div>
          {categories.map((data) => {
            return (<Button key={data.id} onPress={()=>{ this.props.setCategory(data.id,data.name); navigate('CategoriesValidation') }}>{data.name}</Button>);
          })}
        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  categorySelected: state.opportunitiesConstructor.categorySelected,
  FormFullName: state.opportunitiesConstructor.formData.fullName,
  FormCompany: state.opportunitiesConstructor.formData.company,
  categoriesFullList: state.opportunitiesConstructor.categoriesFullList
});

const mapDispatchToProps = dispatch => ({
  loadMatch: () => dispatch(loadMatch()),
  getCategories: () => dispatch(getCategories()),
  setCategory: (id, name) => dispatch(setCategory(id, name)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
