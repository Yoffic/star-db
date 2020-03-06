import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const renderListData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
    };

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({ data })
        })
        .catch(() => {
          this.setState({ error: true })
        });
    }

    render() {
      const { data, error } = this.state;
      return (
        <View {...this.props} data={data}>
          {error && <ErrorIndicator />}
          {!data && !error && <Spinner />}
        </View>
      );
    }
  };
}

export default renderListData;