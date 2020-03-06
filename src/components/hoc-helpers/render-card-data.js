import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const renderCardData = (View, getData, getImage, getFields) => {
  return class extends Component {
    state = {
      data: null,
      image: null,
      fields: null,
      loading: false,
      error: false,
    };

    componentDidMount() {
      this.updateData();
    }

    componentDidUpdate(prevProps) {
      if (this.props.dataId !== prevProps.dataId) {
        this.setState({ loading: true });
        this.updateData();
      }
    }

    updateData() {
      const { dataId, type } = this.props;
      if (!dataId) return;

      getData(dataId)
        .then((data) => {
          this.setState({
            data,
            image: getImage(data, type),
            fields: getFields(type),
            loading: false,
          });
        });
    }

    render() {
      const { data, image, loading, fields, error } = this.state;
      if (error) {
        return <View><ErrorIndicator /></View>;
      }
      if (!data) {
        return <span>Select an item from a list</span>
      }
      if (loading) {
        return <View loading={loading} ><Spinner /></View>;
      }
      return <View {...this.props} data={data} image={image} fields={fields}></View>
    }
  }
};

export default renderCardData;