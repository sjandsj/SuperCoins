import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  itemSizes, spacing, UIColors,
} from '../../../utils/variables';
import { images } from '../../../assets';

const NavigationHeader = (props) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={props.backButton}
    >
      <Image
        source={images.backArrow}
        style={styles.backButton}
      />
    </TouchableOpacity>
    <View style={styles.balanceView}>
      <Image
        resizeMode='contain'
        source={images.dollar}
        style={styles.dollarIcon}
      />
      <Text>
        202
      </Text>
    </View>
  </View>
 );

NavigationHeader.propTypes = {
  backButton: PropTypes.func,
};

NavigationHeader.defaultProps = {
  backButton: () => {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    height: itemSizes.dollarIconHeight,
    width: itemSizes.dollarIconHeight,
    marginLeft: spacing.medium,
  },
  balanceView: {
    alignItems: 'center',
    width: itemSizes.itemSize60,
    margin: spacing.medium,
    padding: spacing.extraExtraSmall,
    borderRadius: spacing.mediumLarge,
    backgroundColor: UIColors.white,
    height: itemSizes.dollarIconHeight,
    flexDirection: 'row',
  },
  dollarIcon: {
    height: itemSizes.dollarIconWidth,
    width: itemSizes.dollarIconHeight,
  },
});

export default NavigationHeader;
