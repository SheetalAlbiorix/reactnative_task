/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

interface DownArrowIconProps {
    size?: number;
    color?: string;
}

const DownArrowIcon: React.FC<DownArrowIconProps> = ({  }) => {
    return (
        <View style={styles.iconContainer}>
            <AntIcon name="down" color="green" size={50} />
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DownArrowIcon;
