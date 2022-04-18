import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native' ;
import { colors, parameters, title1 } from '../../global/styles';
import *as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Header from '../../components/Header';




export default function SignInScreen({navigation}){

    const [textInput2Fossued, setTextInput2Fossued] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style={style.container}>
            <Header title="my accout" type="arrow-left" navigation ={navigation}  />

            <View style={{marginLeft:10, marginTop: 10}}>
                <Text style={title1} >
                    sign-In
                </Text>
            </View>

            <View style = {{alignItems: "center", marginTop:10, marginBottom:50}}>
                <Text style={style.text1}>please-enter the gmail and password</Text>
                <Text style={style.text1}>registered with your accout</Text>
            </View>
            
            <View style={{marginTop:25, marginLeft:10, marginRight:10}}>
                <View style = {style.TextInput1}>
                    <Animatable.View>
                        <Icon 
                            name='person'
                            iconStyle={{color: colors.grey3}}
                            type="material"
                        />
                    </Animatable.View>
                    <TextInput
                        placeholder="Email"
                        style={{width:"91%"}}
                        ref={textInput1}
                    />
                </View>

                <View style = {style.TextInput2}>
                    <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={20}>
                        <Icon 
                            name='lock'
                            iconStyle={{color: colors.grey3}}
                            type="material"
                        />
                    </Animatable.View>

                    <TextInput
                        placeholder="Password"
                        style={{width:"80%"}}
                        ref={textInput2}
                        onFocus = {()=>{
                            setTextInput2Fossued(false)
                        }}
                        onBlur = {()=>{
                            setTextInput2Fossued(true)
                        }}
                    />

                    <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={20}>
                        <Icon 
                            name='visibility-off'
                            iconStyle={{color: colors.grey3}}
                            type="material"
                        />
                    </Animatable.View>
                </View>
            </View>


            <View style={{marginHorizontal:30, marginTop:30}}>
                <Button
                    title="Sign In"
                    buttonStyle = {parameters.styledButtonSignIn}
                    titleStyle = {parameters.buttonTitleSignIn}
                />
            </View>

            <View style={{alignItems:"center", marginTop:20}}>
                <Text style={{textDecorationLine:"underline", fontSize:15}}>
                    forgot password
                </Text>
            </View>


            <View style={{alignItems:"center", marginTop:20}}>
                <Text style={{fontWeight:"bold", fontSize: 20}}>
                    or
                </Text>
            </View>


            <View style={style.fbAndGmail}>
                <View>
                    <SocialIcon
                        title='facebook'
                        button
                        type='facebook'
                        style={parameters.SocialIcon}
                    />
                </View>
                <View>
                    <SocialIcon
                        title='Google'
                        button
                        type='google'
                        style={parameters.SocialIcon}
                    />
                </View>
            </View>

            <View style={{justifyContent: "center", flexDirection: "row", marginTop:20}}>
                <View style={{marginHorizontal:20, marginTop:20}}>
                    <Text style={{fontWeight:"bold", fontSize:15}}>
                        new on shipfood?
                    </Text>
                </View>

                <View style={{alignItems:'flex-end',marginHorizontal:20,marginTop:10}}>
                    <Button
                        title="create an accout"
                        buttonStyle={style.createSignInbutton}
                        titleStyle={style.createSignIntitle}
                    />
                </View>
            </View>

        </View>
    );
};


const style = StyleSheet.create ({
    container:{
        flex:1,
    },
    text1:{
        color: colors.grey3,
        fontSize: 15
    },

    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius: 12,
        marginBottom:15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center"
    },
    TextInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center"
    },
    fbAndGmail:{
        justifyContent: "center", 
        flexDirection: "row",
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


