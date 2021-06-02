import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { images } from '../../../assets';
import {
  fontSizes, fontWeights, UIColors, itemSizes, 
} from '../../../utils/variables';

const SplashContainer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.welcomeImage}
        style={styles.welcomeImage}
      />
      <Image
        source={require('../../../assets/Star_Loader.gif')}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  imageStyle: {
    width: itemSizes.itemSize150,
    height: itemSizes.itemSize150,
  },
  textStyle: {
    fontSize: fontSizes.giant,
    fontWeight: fontWeights.black,
    color: UIColors.plainYellow,
  },
  welcomeImage: {
    height: itemSizes.itemSize150,
    width: '100%',
  },
});

export default SplashContainer;
