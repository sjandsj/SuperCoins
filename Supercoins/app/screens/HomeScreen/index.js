import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { screenNames } from '../../utils/constant';
import { UIColors, } from '../../utils/variables';
import HomeScreenContainer from './components/HomeScreenContainer';
import Navigation from '../../utils/navigation';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goToDetail() {
    Navigation.sharedInstance().pushToScreen(screenNames.DETAIL_SCREEN);
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
       <HomeScreenContainer
          superCoinsRewardPressed={()=>this.goToDetail()}
       />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: UIColors.backgroundColor,
  },
});

export default HomeScreen;
