import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {useEffect} from 'react';
import DailyRemindersScreen from '../screens/DailyRemindersScreen';
const Stack = createNativeStackNavigator();

export default function Stack(){
    <NavigationContainer>
        <Stack.Screen name='Reminder' component={DailyRemindersScreen}/>
    </NavigationContainer>
}