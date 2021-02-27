import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const RestaurantCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.type}>Salty Curry</Text>
      </View>
      <View>
        <Text style={styles.typeText}>Carrabean</Text>
      </View>
      <Image
        style={{height: Dimensions.get('window').height / 3}}
        source={{
          uri: 'https://random-data-api.com/api/restaurant/random_restaurant',
        }}
      />
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#ffe0b2',
  },
  typeText: {
    fontSize: 18,
  },
});
