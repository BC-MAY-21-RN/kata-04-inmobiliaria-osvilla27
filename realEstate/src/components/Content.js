import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SectionImg } from "./SectionImg";
import Icon from 'react-native-vector-icons/Ionicons';
import { IconText } from "./IconText";
//import Icon from 'react-native-vector-icons/FontAwesome5';

export const Content = ({ item }) => {
    const name="location", size=20, color="black", value=true;
    return (
        <View style={styles.containerMain}>   
            <SectionImg item={item}/> 
            <View style={styles.detailsContent}>
                <Text style={styles.textFirst}>{item.name} </Text>
                <IconText name={name} size={size} color={color} text={item.location} value={value}/>
                <View style={styles.containerIcons}>               
                    <Icon name="bed-outline" size={20}/>
                    <Text style={styles.textThird}>{item.beds}</Text> 
                    <View style={{marginLeft:5}}>
                        <Image source={require("../assets/img/bathtub-outline.png")} style={styles.image}/>             
                    </View>
                    {/* <Icon name="albums-outline" size={20}  style={{marginLeft: 30}}/> */}
                    <Text style={styles.textThird}>{item.bath}</Text>                 
                    <Icon name="home-outline" size={20} />
                    <Text style={styles.textThird}>{item.builtArea}</Text> 
                </View>
                <Text style={styles.textFirst}>$ {item.area}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain:{
        flexDirection: 'row'
    },
    container:{
        flexDirection: 'row',
        paddingTop: 8,
    },  
    detailsContent:{
        marginTop: 10,
        marginLeft:10,
        marginRight: 10,
        marginBottom:5,
    },
    textFirst:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'black',
    },
    textSecond:{
        fontSize:14,
        marginLeft:5,
        paddingBottom: 8,
    },
    containerIcons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    icon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textThird:{
        fontSize:16,
        marginLeft:5,
        marginRight:20,
        fontWeight: 'bold',
        color: 'black',
    },
    image:{
        width:20,
        height:20,
    }
})
