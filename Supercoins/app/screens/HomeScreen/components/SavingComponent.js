import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  fontSizes, fontWeights, UIColors, itemSizes, spacing
} from '../../../utils/variables';
import { images } from '../../../assets';

const SavingComponent = () => (
  <View style={styles.savingsView}>
    <View style={styles.subView}>
      <View style={styles.savingsTextView}>
        <Text style={styles.textStyle}>
          Your Savings
        </Text>
        <Text style={[styles.textStyle, {fontSize: fontSizes.extraExtraSmall, color: UIColors.greyText}]}>
          in last 12 months
        </Text>
      </View>
      <View style={styles.savingAmountSection}>
        <Text style={[styles.textStyle, {fontSize: fontSizes.small}]}>
          $194
        </Text>
        <TouchableOpacity style={{ alignSelf: 'center' }}>
          <Image
            source={images.rightArrow}
            style={styles.rightArrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

SavingComponent.propTypes = {
};

SavingComponent.defaultProps = {
};

const styles = StyleSheet.create({
  savingsView: {
    flex: 1.2,
    backgroundColor: UIColors.savingsBoxColor,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subView: {
    flexDirection: 'row',
    backgroundColor: UIColors.savingsSubBox,
    width: '92%',
    height: '70%',
    borderRadius: spacing.extraSmall,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightArrow: {
    height: itemSizes.smallIcon,
    width: itemSizes.smallIcon,
    alignSelf: 'center',
    marginLeft: spacing.extraExtraSmall,
    tintColor: UIColors.greyText,
  },
  textStyle: {
    color: UIColors.white,
    fontWeight: fontWeights.book,
    textAlign: 'left',
    fontSize: fontSizes.extraSmall,
    margin: spacing.borderDouble,
  },
  savingAmountSection: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: itemSizes.itemSizes70,
  marginRight: spacing.extraExtraLarge,
  },
  savingsTextView: {
    marginLeft: spacing.medium,
  }
});

export default SavingComponent;
