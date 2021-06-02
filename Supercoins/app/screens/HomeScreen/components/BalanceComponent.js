import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  fontSizes, fontWeights, itemSizes, spacing, UIColors,
} from '../../../utils/variables';
import { images } from '../../../assets';

const BalanceComponent = () => (
  <View style={styles.balanceView}>
    <Image
      source={require('../../../assets/spinCoinRight.gif')}
      style={styles.rotatingCoin}
    />
    <View style={styles.centerView}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={images.dollar}
          style={styles.dollarImage}
        />
        <Text style={[styles.textStyle, { fontSize: fontSizes.giant }]}>
          202
        </Text>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Image
            source={images.rightArrow}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.textStyle}>
        SuperCoins Balance
      </Text>
      <Text style={[styles.textStyle, { color: UIColors.greyText, fontSize: fontSizes.extraExtraSmall }]}>
        76 SuperCoins on the way
      </Text>
    </View>
    <Image
      resizeMode='contain'
      source={images.trophy}
      style={styles.trophyIcon}
    />
  </View>
);

BalanceComponent.propTypes = {
};

BalanceComponent.defaultProps = {
};

const styles = StyleSheet.create({
  balanceView: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    padding: spacing.borderDouble,
  },
  dollarImage: {
    height: itemSizes.dollarIconHeight,
    width: itemSizes.dollarIconHeight,
    alignSelf: 'center',
    marginRight: spacing.small
  },
  rotatingCoin: {
    height: itemSizes.textFiledHeight,
    width: itemSizes.textFiledHeight,
  },
  trophyIcon: {
    height: itemSizes.itemSize60,
    width: itemSizes.itemSize60,
  },
  textStyle: {
    color: UIColors.white,
    fontWeight: fontWeights.bold,
    textAlign: 'center',
    fontSize: fontSizes.extraSmall,
  },
  rightArrow: {
    height: itemSizes.smallIcon,
    width: itemSizes.smallIcon,
    alignSelf: 'center',
    marginLeft: spacing.extraExtraSmall,
  },
  centerView: {
    alignItems: 'center',
    marginBottom: spacing.small,
    justifyContent: 'space-between',
    height: '55%',
  },
});

export default BalanceComponent;
