import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, FlatList, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const countries = [
    { image: require('../../../assets/images/flags/GB.png'), code: 'GB', name: 'United Kingdom', dialCode: '+44' },
];

const Landing = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredCountries, setFilteredCountries] = useState(countries);

    useEffect(() => {
        if (phoneNumber.length === 10) {
            navigation.navigate('Login');
        }
    }, [phoneNumber, navigation]);

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredCountries(countries);
        } else {
            const query = searchQuery.toLowerCase();
            const filtered = countries.filter(country =>
                country.name.toLowerCase().includes(query) ||
                country.dialCode.includes(query)
            );
            setFilteredCountries(filtered);
        }
    }, [searchQuery]);

    const handleChange = (value: string) => {
        setPhoneNumber(value);
    };

    const handleCountrySelect = (country: { image: any; code: string; dialCode: string; name: string }) => {
        setSelectedCountry(country);
        setIsModalVisible(false);
        setSearchQuery('');
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSearchQuery('');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/food/food.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.text}>Use your Uber account to get started</Text>
            <View style={styles.phone}>
                <TouchableOpacity style={styles.countryPicker} onPress={() => setIsModalVisible(true)}>
                    <Image source={selectedCountry.image} style={styles.flag} />
                    <Text style={styles.countryText}>{selectedCountry.dialCode}</Text>
                    {/* <Image source={require('../../assets/images/food/chevron.png')} /> */}
                </TouchableOpacity>
                <TextInput
                    style={styles.phoneInput}
                    value={phoneNumber}
                    onChangeText={handleChange}
                    keyboardType="phone-pad"
                    // placeholder={setPhoneNumber}
                    placeholderTextColor="#7f7f7f"
                />
            </View>
            {isModalVisible && (
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modal}>
                                <TextInput
                                    style={styles.searchInput}
                                    value={searchQuery}
                                    onChangeText={setSearchQuery}
                                    placeholder="Search for a country"
                                    placeholderTextColor="#888"
                                />
                                <FlatList
                                    data={filteredCountries}
                                    keyExtractor={(item) => item.code}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={styles.countryButton} onPress={() => handleCountrySelect(item)}>
                                            <Image source={item.image} style={styles.flag} />
                                            <Text style={styles.countryName}>   {item.dialCode}    {item.name}</Text>
                                            <Pressable style={styles.press}>Next</Pressable>
                                        </TouchableOpacity>
                                    )}
                                />

                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: 440,
        height: 600,
        overflow: 'hidden',
    },
    press: {
        width: 100,
        height: 30,
        backgroundColor: '#000',
    },
    text: {
        fontSize: 31,
        color: '#000',
        fontFamily: 'UberMoveTextBold',
        marginTop: 10,
    },
    phone: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '90%',
        height: 60,
        marginTop: 30,
        marginHorizontal: 30,
    },
    countryPicker: {
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 17,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        marginRight: 4,
    },
    countryText: {
        fontFamily: 'UberMoveText',
        fontSize: 18,
        color: '#000',
        marginLeft: 8,
    },
    phoneInput: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        color: '#000',
        fontSize: 18,
    },
    modalContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 22,
        height: '70%',
    },
    searchInput: {
        fontFamily: 'UberMoveTextMedium',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        color: '#000',
        backgroundColor: '#f6f6f6',
        paddingHorizontal: 12,
        height: 46,
        marginBottom: 10,
    },
    countryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    countryName: {
        fontFamily: 'UberMoveTextMedium',
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
    },
    flag: {
        width: 30,
        height: 20,
    },
});

export default Landing;
