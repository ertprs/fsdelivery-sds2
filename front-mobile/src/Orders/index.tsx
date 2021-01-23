import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';
import OrderCard from '../OrderCard';

export default function Orders() {

    const handleOnPress = () => {

    }
   return (
    <>
    <Header />
    <ScrollView style={styles.container}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ScrollView>
    </>
  );

}
const styles = StyleSheet.create({
  container : {
    padding : '5%',
    paddingLeft : '5%',
  }
});

