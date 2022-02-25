import React from "react";
import {View, StyleSheet } from "react-native";
import { Content } from "./Content";
import Icon from 'react-native-vector-icons/Ionicons';

export const Card = ({ item }) => {
    return (
      <View style={styles.card}>
          <Content item={item}/>
          <View style={styles.containerPositon}> 
                <View style={styles.containerScore}>
                    <Icon name="heart-circle" size={40} color="#2dc653"/>
                </View>
            </View>
      </View>
    )
  };

const styles = StyleSheet.create({
  card:{
    borderRadius: 10,
    backgroundColor: '#edf6f9',
    marginVertical:12,
    marginHorizontal: 20,
    padding: 8,
  },
  containerPositon:{
    position: 'absolute', 
    top: '75%', 
    left: '85%', 
    right: 0, 
    bottom: 0, 
    // justifyContent: 'flex-end',
    alignItems: 'center'
},
})
  