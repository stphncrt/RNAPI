import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const RestaurantCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.type}> {props.item.name}</Text>
      </View>
      <View>
        <Text style={styles.typeText}> {props.item.type} </Text>
      </View>
      <Image
        style={{height: Dimensions.get('window').height / 3}}
        source={{uri: props.item.logo}}
      />
      <Text style={styles.desciption}>{props.item.description}</Text>

      <Text style={styles.review}>{props.item.review}</Text>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {},
  header: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#ffe0b2',
  },
  typeText: {
    fontSize: 18,
  },
  type: {
    fontSize: 20,
  },
  desciption: {
    alignSelf: 'center',
    margin: 10,
  },
});
