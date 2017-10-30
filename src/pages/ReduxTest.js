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

  handleUpdate = () => {
    this.props.update(String(new Date()));
  };

  componentWillReceiveProps(nextProps) {
    console.log('Prev', this.props);
    console.log('Next', nextProps);
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
    loadTime: loadTime,
    lastUpdate: lastUpdate,
  };
};

export default connect(mapStateToProps, { update })(ReduxTestPage);
