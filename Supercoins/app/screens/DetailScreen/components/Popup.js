import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  fontSizes, fontWeights, itemSizes, spacing, UIColors,
} from '../../../utils/variables';
import { popupData } from '../../../utils/constant';
import { images } from '../../../assets';

const Popup = (props) => (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>

        <View style={styles.headerView}>
          <Image
            source={{uri: `${popupData.logo}`}}
            style={styles.logo}
          />
          <View style={{ marginLeft: spacing.small}}>
            <Text
              numberOfLines={2}
              style={styles.headerText}
            >
                {popupData.header}
            </Text>
            <View style={styles.priceView}>
              <Image
                source={images.dollar}
                style={styles.dollarIcon}
              
              />
              <Text style={{fontSize: fontSizes.extraExtraSmall}}>
                {popupData.cost}
              </Text>
            </View>
          </View>
        </View>
      <View style={styles.limitView}>
        <Text style={{ padding: spacing.medium }}>
          {`*   ${popupData.validity}`}
        </Text>
        <Text style={{ padding: spacing.medium }}>
          {`*   ${popupData.claimLimit}`}
        </Text>
      </View>
      <View style={styles.limitView}>
        <Text style={styles.boldText}>
          {`About the Offer`}
        </Text>
        <Text style={{ padding: spacing.extraExtraSmall }}>
          {`*   ${popupData.about}`}
        </Text>
        <Text style={styles.boldText}>
          {`Key Terms & Conditions`}
        </Text>
        <Text style={{ padding: spacing.extraExtraSmall }}>
          {`* "Restaurant" means the restaurants listed on \tZomato Platform.\n`}
          {`* "Content" will include (but is not limited to) reviews, images, photos, audio, video, location data, nearby places, and all other forms of information or data.\n`}
          {`* Merchant means the merchant(s) listed on the Zomato Platform and offering its Nutrition Products (defined herein below) to the Customers.\n`}
          {`* You hereby represent and warrant that you are at least eighteen (18) years of age or above and are fully able and competent to understand and agree the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms.\n`}
          {`* Zomato is constantly evolving in order to provide the best possible experience and information to its Customers.\n`}
        </Text>
      </View>
      </ScrollView>    
      <TouchableOpacity
        style={styles.subscribeButton}
        onPress={props.openDetails}
      >
        <Text style={styles.subscribeButtonText}>
          Subscribe to the offer
        </Text>
      </TouchableOpacity>
    </View>
  );

Popup.propTypes = {
  openDetails: PropTypes.func,
};

Popup.defaultProps = {
  openDetails: () => {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.small,
  },
  emptyTitle: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.medium,
  },
  boldText: {
    fontWeight: fontWeights.medium,
    padding: spacing.medium,
  },
  subscribeButton: {
    width: '90%',
    backgroundColor: UIColors.darkOrange,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: itemSizes.textFiledHeight,
    borderRadius: spacing.extraExtraSmall,
  },
  subscribeButtonText: {
    fontWeight: fontWeights.bold,
    color: UIColors.white,
  },
  headerView: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: spacing.border,
    borderBottomColor: UIColors.greyText,
  },
  logo: {
    height: itemSizes.giftButtonHeight,
    width: itemSizes.giftButtonWidth,
  },
  headerText: {
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.extraSmall,
    color: UIColors.black,
    width: '80%',
  },
  dollarIcon: {
    height: spacing.mediumLarge,
    width: spacing.mediumLarge,
    marginRight: spacing.extraExtraSmall,
  },
  priceView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  limitView: {
    borderBottomWidth: spacing.border,
    borderBottomColor: UIColors.greyText,
    width: '90%',
    alignSelf: 'center'
  },
});

export default Popup;
