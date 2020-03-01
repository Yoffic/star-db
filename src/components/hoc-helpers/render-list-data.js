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
      if (error) {
        return <View><ErrorIndicator /></View>;
      }
      if (!data) {
        return <View><Spinner /></View>;
      }
      return <View {...this.props} data={data}></View>
    }
  };
}

export default renderListData;