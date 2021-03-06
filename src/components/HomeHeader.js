import React from 'react';
import {Icon, withBadge} from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native';
import { colors, parameters } from '../global/styles';

export default function HomeHeader () {

    const BadgeIcon = withBadge(0)(Icon)

    return (
        <View style={styles.header}>
            <View style={{alignItems:'center', justifyContent:'center', marginLeft:15}}>

                <Icon
                    type='material-community'
                    name='menu'
                    color="white"
                    size={42}
                />
            </View>

            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:"white", fontSize:25, fontWeight:'bold'}}>
                    Shipfood
                </Text>
            </View>


            <View style={{alignItems:'center', justifyContent:'center', marginRight:15}}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={35}
                    color="white"
                />
            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.buttons,
        flexDirection:"row",
        height: 50,
        justifyContent:'space-between'
    }
})
