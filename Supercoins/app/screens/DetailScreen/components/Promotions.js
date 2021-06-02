import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  fontWeights, itemSizes, UIColors, spacing,
} from '../../../utils/variables';
import { detailScreenPromotions } from '../../../utils/constant';

const Promotions = (props) => (
  <View style={styles.container}>
    <FlatList
      data={detailScreenPromotions}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: itemSizes.promoBannerHeight }}
      renderItem={(item) => (
        <View style={styles.bannerView}>
          <ImageBackground
            resizeMode='cover'
            imageStyle={{ borderRadius: spacing.extraExtraLarge }}
            source={{ uri: `${item.item}` }}
            style={styles.imagebackground}
          >
            <TouchableOpacity
              onPress={props.openDetails}
              style={styles.detailButton}
            >
              <Text style={styles.detailButtonText}>
                Details
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )}
    />
  </View>
);

Promotions.propTypes = {
  openDetails: PropTypes.func,
};

Promotions.defaultProps = {
  openDetails: () => {},
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: spacing.medium,
  },
  bannerView: {
    flex: 1,
    borderRadius: spacing.extraExtraLarge,
  },
  imagebackground: {
    alignSelf: 'center',
    margin: spacing.semiMedium,
    height: itemSizes.detailBannerHeight,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  detailButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing.extraExtraSmall,
    backgroundColor: UIColors.tomato,
    height: itemSizes.textFiledHeight,
    marginBottom: spacing.extraExtraLarge,
    width: itemSizes.giftButtonWidth,
  },
  detailButtonText: {
    fontWeight: fontWeights.bold,
    color: UIColors.white,
  },
});

export default Promotions;
