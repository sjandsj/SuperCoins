import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import BalanceComponent from './BalanceComponent';
import SavingComponent from './SavingComponent';
import RewardsComponent from './RewardsComponent';

const HomeScreenContainer = (props) => {
  return (
    <View style={styles.container}>
      <BalanceComponent />
      <SavingComponent />
      <RewardsComponent
        superCoinsRewardPressed={props.superCoinsRewardPressed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  
});

HomeScreenContainer.propTypes = {
  superCoinsRewardPressed: PropTypes.func,
};

HomeScreenContainer.defaultProps = {
  superCoinsRewardPressed: () => { },
};

export default HomeScreenContainer;
