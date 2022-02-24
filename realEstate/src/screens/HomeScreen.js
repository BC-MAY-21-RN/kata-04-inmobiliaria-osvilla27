import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Card } from '../components/Card';



export const HomeScreen = () => {
    return (
        <View style={styles.containerHome}>
            <Text>Hola mundo!</Text>
            <Card/>
        </View>
    )
};

const styles = StyleSheet.create({
    containerHome: {
      flex: 1,
    },
  });