import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import NavigationHeader from './NavigationHeader';
import Promotions from './Promotions';
import Filter from './Filter';
import { UIColors } from '../../../utils/variables';

const DetailScreenContainer = (props) => {
  return (
    <View style={styles.container}
    >       
      <NavigationHeader
        backButton={props.backButton}
      />
      <Filter
        renderFilterMenu={(item) => props.renderFilterMenu(item)}
      />
      <Promotions
        openDetails={props.openDetails}
      />
    </View>
  );
};

DetailScreenContainer.propTypes = {
  backButton: PropTypes.func,
  renderFilterMenu: PropTypes.func,
  openDetails: PropTypes.func,
};

DetailScreenContainer.defaultProps = {
  backButton: () => { },
  renderFilterMenu: () => { },
  propTypes: () => {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UIColors.backgroundColor,
  }
});

export default DetailScreenContainer;
