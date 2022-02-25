import React from "react";
import { View, Text, Image, StyleSheet, } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export const SectionImg = ({ item }) => {
    return (
        <View>
            <Image source={item.img} style={styles.image}/>
            <View style={styles.containerPositon}> 
                <View style={styles.containerScore}>
                    <Icon name="star" size={12} color="#ffbe0b"/>
                    <Text style={styles.score}>{item.score}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        borderRadius:12,
        height: 120, 
        width: 110,
        margin: 10
    },
    containerPositon:{
        position: 'absolute', 
        top: '70%', 
        left: 0, 
        right: 0, 
        bottom: 0, 
        // justifyContent: 'flex-end',
        alignItems: 'center'
    },
    containerScore:{
        flexDirection: 'row',
        backgroundColor: '#fbf8cc',
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 10
    },
    score:{
        marginLeft: 6,
        fontSize:12,
        fontWeight: 'bold',
        color: '#7f5539',
    }
})
