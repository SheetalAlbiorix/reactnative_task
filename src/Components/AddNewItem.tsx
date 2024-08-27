import React, { useEffect, useState } from 'react'
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../Screens/Style/Home'

export const AddNewItem = ({ isPopupVisible, input, handleSubmit, handleHide }: any) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(input)
    }, [input])

    return (
        <Modal
            transparent={true}
            visible={isPopupVisible}
            animationType="slide"
        >
            <TouchableOpacity style={styles.modalContainer} activeOpacity={0.9} onPress={() => { handleHide }}>
                <View style={styles.modalContent}>
                    <Text style={styles.titleCont}>Enter Value</Text>
                    <TextInput
                        style={styles.input}
                        value={inputValue}
                        onChangeText={setInputValue}
                        placeholder="Type here..."
                    />
                    <TouchableOpacity activeOpacity={0} style={styles.buttonContainer}>
                        <Text style={styles.buttonTitle} onPress={() => { handleSubmit(inputValue) }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
