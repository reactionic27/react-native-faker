import React, {useState, useEffect, Fragment, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../components/Header';
import {GET_ALL_USERS_REQUEST} from '../redux/constants';
import {getUserState} from '../redux/selectors';

export function Users() {
  const dispatch = useDispatch();
  const {users} = useSelector(getUserState);
  const [page, setPage] = useState<number>(1);

  const fetchMore = useCallback(() => setPage(page + 1), [page]);

  useEffect(() => {
    dispatch({type: GET_ALL_USERS_REQUEST, payload: {page}});
  }, [dispatch, page]);

  return (
    <Fragment>
      <SafeAreaView style={styles.banner} />
      <SafeAreaView style={styles.container}>
        <Header title="Users" />
        <View style={styles.list}>
          <FlatList
            data={users}
            keyExtractor={(item) => item.email}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Image source={{uri: item.avatar}} style={styles.avatar} />
                <Text style={styles.name}>
                  {`${item.first_name} ${item.last_name}`}
                </Text>
              </View>
            )}
            onEndReachedThreshold={0.9}
            onEndReached={fetchMore}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 0,
    backgroundColor: '#F1F1F1',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
