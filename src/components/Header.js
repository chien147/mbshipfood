import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native' ;
import { colors, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';


export default function Header({title,type,navigation}){ 
    return (
        <View style={style.header}>
            <View style={{marginLeft:10, marginTop:5}}>
                <Icon 
                    type='material-community'
                    name={type}
                    color={colors.headerText}
                    size = {30}
                    onPress = {()=>{navigation.goBack()}}
                />
            </View>
        
            <View>
                <Text style={style.headerText}>{title}</Text>
            </View>
        </View>
    );
};


const style = StyleSheet.create ({
    header: {
        backgroundColor: colors.buttons,
        flexDirection:'row',
        height:parameters.headerHeight
    },

    headerText: {
        color:colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 40,
        marginTop: 5
    }
})


