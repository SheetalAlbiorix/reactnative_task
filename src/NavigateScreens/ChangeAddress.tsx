/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const ChangeAddress = () => {
    return (
        <View style={styles.container}>
            {/* <Image source={require('../../assets/files/map/leftarrow.png')} /> */}
            <Text>Order Details</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
});

export default ChangeAddress;
