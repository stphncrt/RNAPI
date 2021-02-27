import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

import Button from './components/Button';
import RestaurantCard from './components/RestaurantCard';

// const Main = (props) => {
//   const [userData, setUserData] = useState([]);

//   const fetchData = () => {
//     axios.get('https://jsonplaceholder.typicode.com/posts');

//     // .then((response) => {
//     //   console.log(response);
//     //   console.log('eeee');
//     //   setUserData(data);
//     // }).catch((error) => {
//     //   console.log(error);
//     // });
//   };

//   const fetchDataWithAsync = async () => {
//     console.log('starting with async');
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users',
//     );
//     console.log(response.data);
//     setUserData({data});
//   };

//   return (
//     <View>
//       <Text style={{fontSize: 40}}>Main</Text>
//       <Button title="Fetch Data" onPress={fetchData} />
//       <View style={{margin: 10}} />
//       <Button title="Fetch Data With Async" onPress={fetchDataWithAsync} />

//       <FlatList
//         data={userData}
//         renderItem={({item}) => <Text>{item.name}</Text>}
//         />
//     </View>
//   );
// };

const Main = (props) => {
  return (
    <View>
      <RestaurantCard />
      {/* <Button title="Get new Restaurant" /> */}
    </View>
  );
};

export default Main;

//https://random-data-api.com/api/restaurant/random_restaurant
