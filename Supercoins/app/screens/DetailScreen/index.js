import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Navigation from '../../utils/navigation';
import { UIColors, itemSizes, spacing, fontWeights, fontSizes } from '../../utils/variables';
import Drawer from 'react-native-advance-draggable-view';
import DetailScreenContainer from './components/DetailScreenContainer';
import { images } from '../../assets';
import Popup from './components/Popup';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterIndexSelected: 0,
      drawer: null,
      showDrawer: false,
    };
  }

  backButton() {
    Navigation.sharedInstance().popScreen()
  }

  filterSelected = index => {
    this.setState({
      filterIndexSelected: index,
    })
  };

  openDetails = () => {
    console.log('detailes called')
    this.setState({
      showDrawer: !this.state.showDrawer,
    })
  }

  renderItem = (item) => (
    <TouchableOpacity
      onPress={() => this.filterSelected(item.item.id)}
      style={[styles.filerItem,
        { borderColor: this.state.filterIndexSelected === item.item.id ?
          UIColors.royalBlue : UIColors.whiteSmoke
        }]}
    >
      <Text style={[styles.filerItemText, {
        color: this.state.filterIndexSelected === item.item.id ?
        UIColors.royalBlue : UIColors.black
        }]}>
        {item.item.value}
      </Text>
    </TouchableOpacity>
  );

  render() {
    const { showDrawer } = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        { showDrawer ?
          <Drawer
            initialDrawerSize={0.8}
            refFunc={(c) => {
              this.drawer = c
            }}
            renderDrawerView={() => (<Popup openDetails={() => this.openDetails()} />)}
            renderContainerView={() => <DetailScreenContainer
              backButton={() => this.backButton()}
              renderFilterMenu={(item) => this.renderItem(item)}
              openDetails={() => this.openDetails()}
            />}
            renderInitDrawerView={() => (<View style={styles.dragableStyle}>           
              <Image  
                source={images.dragIcon}
                style={styles.dragIcon}  
              />
            </View>)}
          />
          :
          <DetailScreenContainer
            backButton={() => this.backButton()}
            renderFilterMenu={(item) => this.renderItem(item)}
            openDetails={() => this.openDetails()}
          />
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: UIColors.backgroundColor,
  },
  backButton: {
    height: itemSizes.dollarIconHeight,
    width: itemSizes.dollarIconHeight,
    marginLeft: spacing.medium,
  },
  filerItem: {
    borderWidth: spacing.border,
    padding: spacing.small,
    marginHorizontal: spacing.extraSmall,
    alignItems: 'center',
    justifyContent: 'center',
    height: itemSizes.filterIconHeight,
    borderRadius: spacing.large,
    backgroundColor: UIColors.white,
  },
  filerItemText: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.extraExtraSmall,
  },
  dragIcon: {
    height: itemSizes.dollarIconHeight,
    width: itemSizes.textFiledHeight,
  },
  dragableStyle: {
    backgroundColor: UIColors.white,
    height: itemSizes.dollarIconWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailScreen;
