import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Easing,
} from 'react-native';
import {
  itemSizes, UIColors, spacing,
} from '../utils/variables';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: spacing.large,
    position: 'absolute',
  },
  loaderbackgroundView: {
    padding: spacing.semiMedium,
    borderRadius: spacing.extraLarge,
  },
  imageStyle: {
    width: itemSizes.onefifty,
    height: itemSizes.onefifty,
  },
});

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loaderbackgroundView}>
        <Image
          source={require('../assets/Star_Loader.gif')}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
};

Loader.propTypes = {
};

Loader.defaultProps = {
};

export default Loader;
