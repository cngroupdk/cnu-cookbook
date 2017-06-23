import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../components/RecipeList/actions';
import RecipeList from '../components/RecipeList/RecipeList';
import SearchBar from '../components/SearchBar/SearchBar';
import Spinner from '../components/common/Spinner';

class RecipeListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      recipes: props.recipes,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchRecipes();
  }

  componentWillReceiveProps(nextProps) {
    const { recipes } = nextProps;

    if (this.props.recipes !== recipes) {
      const { searchText } = this.state;

      this.setState({
        recipes: this.filterRecipes(recipes, searchText),
      });
    }
  }

  filterRecipes(recipes, text) {
    if (!text) {
      return recipes;
    }

    return recipes.filter(r =>
      r.title.toLowerCase().includes(text.toLowerCase()),
    );
  }

  handleSearchChange(event) {
    const { value } = event.target;
    const { recipes } = this.props;

    this.setState({
      searchText: value,
      recipes: this.filterRecipes(recipes, value),
    });
  }

  render() {
    const { isFetching } = this.props;
    const { searchText, recipes } = this.state;

    if (isFetching) {
      return <Spinner />;
    }

    return (
      <div>
        <SearchBar text={searchText} onChange={this.handleSearchChange} />
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { recipes, isFetching } = state.recipeList;

  return {
    recipes,
    isFetching,
  };
};

const mapDispatchToProps = {
  fetchRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListPage);
