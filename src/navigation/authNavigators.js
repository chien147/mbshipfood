import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SignInWellcomeScreen from '../screens/authScreens/SignInWellcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';

const Auth = createStackNavigator();


export default function AuthStack() {
    return (

        <Auth.Navigator>
            <Auth.Screen
                name ="SignInWelcomeScreen"
                component= {SignInWellcomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name ="SignInScreen"
                component= {SignInScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </Auth.Navigator>

    );
};

