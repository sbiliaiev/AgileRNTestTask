import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'react-proptypes';

import styles from './styles';

export default class StackOverflow extends React.Component {
  componentDidMount() {
    this.props.getQuestions(1);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      console.log(nextProps.list);
    }
  }

  renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>
        {item.title}
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
        <Text>STACKOVERFLOW BITCH</Text>
        <FlatList
          data={this.props.list}
          keyExtractor={item => item.link}
          renderItem={this.renderListItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

StackOverflow.propTypes = {
  getQuestions: PropTypes.func.isRequired,
};