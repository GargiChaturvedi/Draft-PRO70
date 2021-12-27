import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class PreviousRidesHistoryScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Check out your previous rides!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    heading: {
        color: 'saddlebrown',
        marginTop: 50,
        fontSize: 50
    }
});