import React from 'react';
import {View, Text} from 'react-native';

const RestaurantCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}></Text>
    </View>
  );
};

export {RestaurantCard};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});
