import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';
import {Header} from '../components/Header';

export function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2').then((response) => {
      setUsers(response.data.data);
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Users" />
      <View style={styles.list}>
        <FlatList
          data={users}
          renderItem={({item, index}) => (
            <View style={styles.listItem} key={index}>
              <Image source={{uri: item.avatar}} style={styles.avatar} />
              <Text style={styles.name}>
                {`${item.first_name} ${item.last_name}`}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  list: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    height: 96,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    marginLeft: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});
