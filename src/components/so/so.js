import React from 'react';
import { View, Text, FlatList, ListView } from 'react-native';
import PropTypes from 'react-proptypes';
import he from 'he';

import styles from './styles';

export default class StackOverflow extends React.Component {
  // state = {
  //   page: 1,
  // }

  componentDidMount() {
    if (this.props.page === 1) {
      this.props.getQuestions(this.props.page);
    }
  }

  // getMoreData = () => {
  //   this.setState((state) => {
  //     const obj = { ...state };
  //     obj.page += 1;
  //     return obj;
  //   }, () => {
  //     this.props.getQuestions(this.state.page);
  //   });
  // }

  renderListItem = ({ item, index }) => (
    <View style={[styles.listItem, index % 2 === 0 ? styles.highlight : {}]}>
      <Text style={styles.listItemText}>
        {he.decode(item.title)}
      </Text>
    </View>
  )

  renderSeparator = () => (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
      }}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.list}
          keyExtractor={(item, index) => index}
          renderItem={this.renderListItem}
          ItemSeparatorComponent={this.renderSeparator}
          onEndReached={() => this.props.getQuestions(this.props.page)}
          onEndReachedThreshold={0}
        />
      </View>
    );
  }
}

StackOverflow.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.any.isRequired,
  ).isRequired,
};
