import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'
import { Icon } from 'react-native-elements';
import {colors, parameters } from '../global/styles'


export default function FoodCard ({
    OnPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth

}) {

    return (
        <TouchableOpacity>
            <View style={{...styles.cardView,width:screenWidth}}>
                <Image
                    style={{...styles.image, width:screenWidth}}
                    source={{uri:images}}
                />
                <View style={{marginLeft:5}}>
                    {/* tên tiệm */}
                    <View>
                        <Text style={styles.restauranName}>
                            {restaurantName}
                        </Text>
                        
                    </View>

                    {/* địa chỉ and  */}
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={styles.distance}>
                            <Icon
                                name='place'
                                type='material'
                                color={colors.grey2}
                                size={25}
                                iconStyle={{
                                    marginTop:3
                                }}
                            />
                            <Text style={styles.Min}>{farAway}</Text>
                        </View>
                        
                        <View style={{flex:9, flexDirection:'row'}}>
                            <Text style={styles.address}>
                                {businessAddress}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* review */}
            <View style={styles.review}>
                <Text style={styles.average}>
                    {averageReview}
                </Text>
                <Text style={styles.numberOfReview}>
                    {numberOfReview} review
                </Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.grey4
    },
    image:{
        borderRadius:10,
        height:150,
    },
    restauranName:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,
        marginTop:5, 
    },
    distance:{
        flex:4,
        flexDirection:'row',
        borderColor:colors.grey4,
        paddingHorizontal:5,
        borderWidth:1,
        borderRadius:10
    },
    Min:{
        fontSize:15,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey4
    },
    address:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10,
        maxWidth:200
    },
    review:{
        position:'absolute',
        top:0,
        right:15,
        backgroundColor:'rgba(52,52,52,0.6)',
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    average:{
        color:"white",
        fontSize:20,
        fontWeight:'bold',
        marginTop:1,
    },
    numberOfReview :{
        color:"white", 
        fontSize:13,
        marginRight:0,
        marginLeft:0
    }

})

