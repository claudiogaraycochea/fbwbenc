import React, { Component } from 'react';
import { Text, Button, Container, Div } from '../styles/Theme';
import { setCategory, loadMatch } from '../actions/actions';
import { connect } from 'react-redux';
import AppHeader from '../components/Header';

class CategoriesValidation extends Component {

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
          <Text>Great! You chose {this.props.categorySelected.name}. Is this right?</Text>
        </Div>
        <Div>

          <Button
            outline
            onPress={() => navigate('SubCategories')}>
            YES
          </Button>

          <Button
            outline
            onPress={() => navigate('Categories')}>
            NO
          </Button>

        </Div>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  categorySelected: state.opportunitiesConstructor.categorySelected
})

const mapDispatchToProps = dispatch => ({
  loadMatch: () => dispatch(loadMatch()),
  setCategory: (categorySelected) => dispatch(setCategory(categorySelected))
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesValidation);