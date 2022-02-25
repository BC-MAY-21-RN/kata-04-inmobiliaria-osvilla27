import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export const IconText = ({ name, size, color, text, value }) => {
    console.log(name, size, color, text, value)
    return (
        <View style={value ? styles.containerText : styles.containerScore}>
            <Icon name={name} size={size} color={color}/>
            <Text style={value ? styles.text : styles.score}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerScore:{
        flexDirection: 'row',
        backgroundColor: '#fbf8cc',
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 10
    },
    containerText:{
        flexDirection: 'row',
        paddingTop: 8,
    },
    score:{
        marginLeft: 6,
        fontSize:12,
        fontWeight: 'bold',
        color: '#7f5539',
    },
    text:{
        fontSize:14,
        marginLeft:5,
        paddingBottom: 8,
    },
})
