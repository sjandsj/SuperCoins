import {
  Dimensions,
  Platform,
} from 'react-native';
import { responsiveSize } from './utils';

const { width, height } = Dimensions.get('window');

export const UIColors = {
  black: `#000000`,
  plainYellow: '#ffff00',
  backgroundColor: 'rgb(26,30,44)',
  savingsBoxColor: 'rgb(36,44,67)',
  savingsSubBox: 'rgb(52,63,89)',
  transparent: 'rgba(0,0,0,0.4)',
  white: `#ffffff`,
  greyText: `#a9a9a9`,
  tomato: `#ff6347`,
  whiteSmoke: `#f5f5f5`,
  royalBlue: `#4169e1`,
  darkOrange: `#ff8c00`,
};

export const fontSizes = {
  extramini: responsiveSize(6),
  mini: responsiveSize(8),
  tiny: responsiveSize(10),
  extraExtraSmall: responsiveSize(12),
  extraSmall: responsiveSize(14),
  small: responsiveSize(16),
  medium: responsiveSize(18),
  mediumLarge: responsiveSize(20),
  large: responsiveSize(22),
  extraLarge: responsiveSize(24),
  extraLarger: responsiveSize(28),
  extraExtraLarge: responsiveSize(32),
  giant: responsiveSize(36),
};

export const spacing = {
  zero: responsiveSize(0),
  border: responsiveSize(1),
  borderDouble: responsiveSize(2),
  extraExtraSmall: responsiveSize(3),
  extraSmall: responsiveSize(5),
  small: responsiveSize(8),
  semiMedium: responsiveSize(10),
  medium: responsiveSize(12),
  mediumLarge: responsiveSize(16),
  large: responsiveSize(20),
  extraLarge: responsiveSize(24),
  extraExtraLarge: responsiveSize(30),
};

export const itemSizes = {
  itemSize150: responsiveSize(150),
  filterIconHeight: responsiveSize(35),
  itemSize60: responsiveSize(60),
  itemSizes70: responsiveSize(70),
  dollarIconHeight: responsiveSize(25),
  dollarIconWidth: responsiveSize(20),
  textFiledHeight: responsiveSize(40),
  smallIcon: responsiveSize(10),
  giftButtonHeight: responsiveSize(120),
  giftButtonWidth: responsiveSize(100),
  promoBannerHeight: responsiveSize(200),
  promoBannerwidth: responsiveSize(350),
  detailBannerHeight: responsiveSize(500),
};

export const fontWeights = {
  thin: '100',
  light: '300',
  book: '400',
  medium: Platform.OS == "ios" ? '600':"bold",
  bold: Platform.OS == "ios" ? '700':"bold",
  black: 'bold'
};
