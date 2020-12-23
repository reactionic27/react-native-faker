import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Spinner from 'react-native-spinkit';

export function LoadingSpinner() {
  return (
    <SafeAreaView style={styles.container}>
      <Spinner isVisible={true} size={100} type={'Bounce'} color={'#7FB900'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
