import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
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
const fetchRestaurant = () => {
  alert('New data..');
};

const Main = (props) => {
  const [isloading, setIsloading] = useState(true);
  const [restaurantData, setRestaurantData] = useState(null);
  const fetchRestaurant = async () => {
    setIsloading(true);
    const response = await axios.get(
      'https://random-data-api.com/api/restaurant/random_restaurant',
    );
    console.log(response);
    setRestaurantData(response.data);
    setIsloading(false);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <View>
      {isloading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <RestaurantCard item={restaurantData} />
      )}
      <Button
        title="Get new Restaurant"
        onNewRequest={() => fetchRestaurant()}
      />
    </View>
  );
};

export default Main;
