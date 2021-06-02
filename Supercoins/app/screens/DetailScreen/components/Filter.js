import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  spacing,
} from '../../../utils/variables';
import { filterMenu } from '../../../utils/constant';

const Filter = (props) => (
    <View style={{ marginTop: spacing.extraLarge }}>
      <FlatList
        data={filterMenu}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => props.renderFilterMenu(item)}
      />
    </View>
  );

Filter.propTypes = {
  renderFilterMenu: PropTypes.func,
};

Filter.defaultProps = {
  renderFilterMenu: ()=>{},
};

export default Filter;
