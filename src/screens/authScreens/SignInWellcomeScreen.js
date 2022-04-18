import React, {useState, useRef} from 'react';
import {Image, View, Text, StyleSheet, Dimensions, TextInput } from 'react-native' ;
import { colors, parameters, title1 } from '../../global/styles';
import *as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Header from '../../components/Header';
import Swiper from 'react-native-swiper';

export default function SignInWellcomeScreen ({navigation}){
    return(

        <View style={{flex:1}}>

            <View style={{flex:3, justifyContent:'flex-start',alignItems:'center',paddingTop:20}}>
                <Text style={{fontSize:26, color:'#0099FF', fontWeight:'bold'}}>wellcome</Text>
                <Text style={{fontSize:26, color:'#0099FF', fontWeight:'bold'}}>shipfood</Text>
            </View>

            <View style={{flex:4, justifyContent:'center'}}>
                <Swiper autoplay={true}>
                    <View style={style.slide1}>
                        <Image
                            resizeMode="cover"
                            source={{uri:"https://nhathauxaydung24h.com/wp-content/uploads/2021/11/hinh-nen-dien-thoai-android.jpg"}}
                            style={{height:'100%',width:'100%'}}
                        />
                    </View>
                    <View style={style.slide1}>
                        <Image
                            resizeMode="cover"
                            source={{uri:"https://1.bigdata-vn.com/wp-content/uploads/2021/10/Tuyen-Tap-Bo-Hinh-Nen-Dien-Thoai-Moi-Nhat-Cho.jpg"}}
                            style={{height:'100%',width:'100%'}}
                        />
                    </View>
                    <View style={style.slide1}>
                        <Image
                            resizeMode="cover"
                            source={{uri:"https://i.pinimg.com/474x/72/ae/86/72ae862ebc6b50cc1469ab54733cea9d.jpg"}}
                            style={{height:'100%',width:'100%'}}
                        />
                    </View>
                    <View style={style.slide1}>
                        <Image
                            source={{uri:"https://topchiase24h.com/wp-content/uploads/2021/04/hinh-nen-anime-chang-trai-cute-11.jpg"}}
                            style={{height:'100%',width:'100%'}}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={{flex:4,justifyContent:"flex-end"}}>
                <View style={{marginHorizontal:30, marginTop:30, marginBottom:20}}>
                    <Button
                        title="Sign In"
                        buttonStyle = {parameters.styledButtonSignIn}
                        titleStyle = {parameters.buttonTitleSignIn}
                        onPress={()=>{

                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>
                <View style={{marginHorizontal:30, marginBottom:30}}>
                    <Button
                        title="create an accout"
                        buttonStyle={style.createSignInbutton}
                        titleStyle={style.createSignIntitle}
                    />
                </View>
            </View>

        </View>




    )
}

const style = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9dd6eb'
    },

    slide2:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: '#97CAE5'
    },

    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92BBD9'
    },
    createSignInbutton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:'#ff8c52',
        height:40,
        paddingHorizontal:20
    },
    createSignIntitle:{
        color:'#ff8c52',
        fontSize:15,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',

    }



})

