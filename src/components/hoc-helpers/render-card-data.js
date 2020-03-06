import React, { Component } from 'react';

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
      return (
        <>
          {!data && <span>Select an item from a list</span>}
          {data && <View {...this.props} data={data} image={image} fields={fields} loading={loading}>
            {error && <ErrorIndicator />} 
          </View>}
        </>
      );
    }
  }
};

export default renderCardData;