import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList/RecipeList';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchRecipeList } from '../components/RecipeList/actions';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      filteredItems: [],
    };
  }

  componentDidMount() {
    this.props.fetchRecipeList();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredItems: !this.state.searchText
        ? nextProps.items
        : nextProps.items.filter(i => i.title.includes(this.state.searchText)),
    });
  }

  handleSearchChange = event => {
    const { value } = event.target;

    this.setState({
      searchText: value,
      filteredItems: !value
        ? this.props.items
        : this.props.items.filter(i => i.title.includes(value)),
    });
  };

  render() {
    const { isFetching } = this.props;
    const { searchText, filteredItems } = this.state;

    if (isFetching) {
      return <i className="fa fa-spin fa-spinner" />;
    }

    return (
      <div>
        <SearchBar text={searchText} onSearchChange={this.handleSearchChange} />
        <RecipeList items={filteredItems} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.recipeList.isFetching,
  items: state.recipeList.items,
});

export default connect(mapStateToProps, { fetchRecipeList })(HomePage);
