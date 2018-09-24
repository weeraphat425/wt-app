import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WeatherScreen from'./components/WeatherScreen.js';
import ZipCodeScreen from'./components/ZipCodeScreen.js';
const RootStack = createStackNavigator({
 Weather: WeatherScreen,
 ZipCode: ZipCodeScreen
},{
 initialRouteName: 'ZipCode',
})
export default class App extends React.Component {
 render() {
 return (
 <RootStack/>
 );
 }
}