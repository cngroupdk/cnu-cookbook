import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReduxTest from '../components/ReduxTest/ReduxTest';
import { update } from '../components/ReduxTest/actions';

class ReduxTestPage extends Component {
  static propTypes = {
    loadTime: PropTypes.string,
    lastUpdate: PropTypes.string,
    update: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.props.update(String(new Date()));
  }

  render() {
    const { loadTime, lastUpdate } = this.props;

    return (
      <ReduxTest
        loadTime={loadTime}
        lastUpdate={lastUpdate}
        onUpdate={this.handleUpdate}
      />
    );
  }
}

const mapStateToProps = state => {
  const { loadTime, lastUpdate } = state.reduxTest;

  return {
    loadTime,
    lastUpdate,
  };
};

export default connect(mapStateToProps, { update })(ReduxTestPage);
