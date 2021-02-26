import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import axios from 'axios';

const Main = (props) => {
  const [userData, setUserData] = useState([]);

  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts');

      .then((response) => {
        console.log(response);
        console.log('eeee');
        // setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View>
      <Text style={{fontSize: 40}}>Main</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

export default Main;
