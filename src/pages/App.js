import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import AppNavbar from '../components/AppNavbar/AppNavbar';
import AppFooter from '../components/AppFooter/AppFooter';

class AppPage extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <Grid>
          {this.props.children}
          <AppFooter />
        </Grid>
      </div>
    );
  }
}

export default AppPage;
