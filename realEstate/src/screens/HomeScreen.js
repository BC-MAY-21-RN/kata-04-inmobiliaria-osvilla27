import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Card } from '../components/Card';
import { data } from "../api/data"


export const HomeScreen = () => {

    const renderItem = ({ item }) => (
       <Card item={item}/>
    );

    return (
        <View style={styles.containerHome}>
            <FlatList
                data={ data }
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containerHome: {
      flex: 1,
    },
  });