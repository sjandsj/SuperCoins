import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../../../assets';
import { itemSizes, fontSizes, fontWeights, UIColors, spacing } from '../../../utils/variables';
import { homeScreenPromotionList } from '../../../utils/constant';

const RewardsComponent = (props) => (
    <View style={styles.rewardsView}>
      <TouchableOpacity
        onPress={props.superCoinsRewardPressed}
        style={styles.giftButton}
      >
        <Image
          source={images.giftBox}
          style={styles.gitImage}
        />
        <View style={styles.textView}>
          <Text
            style={styles.textStyle}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {` SuperCoin\n Rewards`}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.moreSection}>
        <Text style={[styles.textStyle, styles.extraDiscountText]}>
          Extra Discount using SuperCoins 
        </Text>
        <FlatList
          data={homeScreenPromotionList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={(item)=>(
            <TouchableOpacity>
              <Image
                resizeMode='cover'
                source={{uri : `${item.item}`}}
                style={styles.promoBanner}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );

RewardsComponent.propTypes = {
  superCoinsRewardPressed: PropTypes.func,
};

RewardsComponent.defaultProps = {
  superCoinsRewardPressed: () => {},
};

const styles = StyleSheet.create({
  rewardsView: {
    flex: 6,
    backgroundColor: UIColors.whiteSmoke,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.medium,
  },
  gitImage: {
    height: itemSizes.itemSizes70,
    width: itemSizes.itemSizes70,
    
  },
  giftButton: {
    backgroundColor: 'gold',
    alignItems: 'center',
    height: itemSizes.giftButtonHeight,
    width: itemSizes.giftButtonWidth,
    borderRadius: spacing.small,
    justifyContent: 'space-between',
    borderWidth: spacing.border,
    borderColor: UIColors.greyText,
  },
  textStyle: {
    fontWeight: fontWeights.medium,
    textAlign: 'center',
  },
  textView: {
    backgroundColor: UIColors.white,
    width: '100%',
    borderBottomLeftRadius: spacing.small,
    borderBottomRightRadius: spacing.small,
  },
  promoBanner: {
    height: itemSizes.promoBannerHeight,
    width: itemSizes.promoBannerwidth,
    marginHorizontal: spacing.mediumLarge,
    borderRadius: spacing.small,
    marginTop: spacing.medium,
  },
  moreSection: {
    marginTop: spacing.extraExtraLarge,
  },
  extraDiscountText: {
    textAlign: 'left', 
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
  }
});

export default RewardsComponent;
