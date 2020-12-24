import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
  },
});
