import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { appIntervals, screenNames } from '../../utils/constant';
import Navigation from '../../utils/navigation';
import { UIColors } from '../../utils/variables';
import SplashContainer from './components/SplashContainer';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    Navigation.sharedInstance().setAppNavigation(props.navigation);
  }

  componentDidMount() {
    setTimeout(() => {
      Navigation.sharedInstance().resetRouteName(screenNames.HOME_SCREEN);
    }, appIntervals.SPLASH_INTERVAL);
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <SplashContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: UIColors.black,
    flex: 1,
  },
});
