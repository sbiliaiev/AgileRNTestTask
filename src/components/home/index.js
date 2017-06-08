import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'react-proptypes';

import styles from './styles';

export default class Home extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.username}>
          { `Hello, ${this.props.username}!` }
        </Text>
      </View>
    );
  }
}

// const Home = props => (
//   <View style={styles.container}>
//     <Text style={styles.username}>
//       { `Hello, ${props.username}!` }
//     </Text>
//   </View>
// );

Home.propTypes = {
  username: PropTypes.string.isRequired,
};

// export default Home;
