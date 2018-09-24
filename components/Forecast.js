import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
export default class Forecast extends React.Component {
    render() {
        return (
        <View>
            <Text style={styles.main}>{this.props.main}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
            <Text style={styles.temp}>{this.props.temp}°C</Text>
        </View>
        );
    }
}
    const styles = StyleSheet.create({
        main: {flex:1 , flexDirection:'row'},
        description: {textAlign:'center', color:'red', fontSize:20},
        temp: {textAlign:'center', color:'yellow', fontSize:100},
    });  