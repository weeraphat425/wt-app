import React from 'react';
import ImageBackground from 'react-native';
import Forecast from './Forecast';
import { StyleSheet, Text, View } from 'react-native';
export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                    <Text>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} />
                </ImageBackground>
            </View>
            );
        }
    }
    const styles = StyleSheet.create({
        container: { paddingTop: 25 },
        backdrop: { width: '100%', height: '100%'},
   });
   